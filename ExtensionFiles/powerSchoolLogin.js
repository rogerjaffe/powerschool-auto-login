var currentURL = document.location.href;
if (currentURL.startsWith("https://adfs19.sandi.net/adfs")) {
	chrome.storage.sync.get({
    username: '',
    password: ''
  }, function(items) {
		document.querySelector('input[name="UserName"]').value=items.username; // District ID
		document.querySelector('input[name="Password"]').value=decrypt(items.password); // District password
		setTimeout(() => {
			document.querySelector('#submitButton').click();
		}, 1000);
  });
}

