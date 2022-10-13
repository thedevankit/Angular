// @ts-nocheck
//Inside imports of your TS file include
import * as CryptoJS from 'crypto-js';

// Declare this key and iv values in declaration
const key = CryptoJS.enc.Utf8.parse('4512631236589784');
const iv = CryptoJS.enc.Utf8.parse('4512631236589784');

// Methods for the encrypt and decrypt Using AES
function encryptUsingAES256() {
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify("Your Json Object data or string")), this.key, {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('Encrypted :' + encrypted);
    this.decryptUsingAES256(encrypted);
    return encrypted;
}

function decryptUsingAES256(decString) {
    var decrypted = CryptoJS.AES.decrypt(decString, this.key, {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('Decrypted : ' + decrypted);
    console.log('utf8 = ' + decrypted.toString(CryptoJS.enc.Utf8));

}
