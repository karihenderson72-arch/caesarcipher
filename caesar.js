// QUESTION 1, 2, 3: Variables and declarations
const partyLocation = "GARDEN";
const shiftValue = 3;

// QUESTION 4: Check if shiftValue is an integer (will still print to the console)
console.log(`Is the shift value an integer? ${Number.isInteger(shiftValue)}`);

// The Caesar Cipher function (DO NOT CHANGE THIS LOGIC)
function caesarCipher(message, shift) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        if (char >= 'A' && char <= 'Z') {
            let originalCode = char.charCodeAt(0);
            let newCode = originalCode + shift;

            if (newCode > 'Z'.charCodeAt(0)) {
                newCode = newCode - 26;
            }
            encryptedMessage += String.fromCharCode(newCode);
        } else {
            encryptedMessage += char;
        }
    }
    return encryptedMessage;
}

// USE THE FUNCTION
let encryptedInvite = caesarCipher(partyLocation, shiftValue);

// CHANGES FOR VISUAL OUTPUT
// This part updates the content on your HTML page
document.getElementById('original-output').innerHTML = partyLocation;
document.getElementById('encrypted-output').innerHTML = encryptedInvite;
