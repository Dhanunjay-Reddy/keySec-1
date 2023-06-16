let userEmail = '';

function setUserEmail(email) {
  userEmail = email;
  console.log(`global: ${userEmail}`);
}

function getUserEmail() {
  return userEmail;
}

module.exports = { setUserEmail, getUserEmail };
