var currentURL = document.location.href;
if (currentURL === "https://powerschool.sandi.net/teachers/pw.html") {
	chrome.storage.sync.get({
    username: '',
    password: ''
  }, function(items) {
		document.querySelector('input[name="username"]').value=items.username; // District ID
		document.querySelector('input[name="password"]').value=decrypt(items.password); // District password
		document.querySelector('#btnEnter').click();
  });
}

