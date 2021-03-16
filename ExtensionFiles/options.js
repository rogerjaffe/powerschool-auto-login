// Saves options to chrome.storage
function save_options() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  chrome.storage.sync.set({
    username: username,
    password: encrypt(password)
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'District ID and password are saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2500);
  });
}

// Restores username and password
// stored in chrome.storage.
function restore_options() {
  // Use default empty string for username and password
  chrome.storage.sync.get({
    username: ''
  }, function(items) {
    document.getElementById('username').value = items.username;
  });
}

function forget_me() {
  chrome.storage.sync.set({
    username: '',
    password: ''
  }, function() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    var status = document.getElementById('status');
    status.textContent = 'I forgot... who are you again??';
    setTimeout(function() {
      status.textContent = '';
    }, 2500);
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('forget').addEventListener('click', forget_me);
