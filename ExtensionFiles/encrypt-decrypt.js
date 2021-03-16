function encrypt(text) {
	var salt = "IjEIZlAJDvxNWgG";
	return CryptoJS.AES.encrypt(text, salt).toString();
}

function decrypt(text) {
	var salt = "IjEIZlAJDvxNWgG";
	var d = CryptoJS.AES.decrypt(text, salt);
	return d.toString(CryptoJS.enc.Utf8);
}

// var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
// // AABsAABkAABiAAAAAAAAAABNAABlAABPAAC0AABHAAA=

// var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
// // 4d657373616765

// decrypted.toString(CryptoJS.enc.Utf8);
// // Message
