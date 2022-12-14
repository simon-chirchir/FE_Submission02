// Function to handle the login process
function login(username, password) {
    // Create a JWT payload with the user's credentials
    const payload = {
      username: username,
      password: password,
      exp: Math.floor(Date.now() / 1000) + 15 * 60, // 15 minutes from now
    };
    //create a jwt that is valid for 15mins and expires in 30 days.
    const jwt = require('jsonwebtoken');

const token = jwt.sign({ data: 'foobar' }, 'secret', {
  expiresIn: '30d',
  notBefore: '15m'
});

console.log(token);

  
    // Sign the JWT with a secret key and return it
    return jwt.sign(payload, 'secretKey');
  }
  
  // Function to handle the verification of a JWT
  function verifyToken(token) {
    // Try to verify the JWT and return the decoded payload
    try {
      return jwt.verify(token, 'secretKey');
    } catch (err) {
      // If the verification fails, return null
      return null;
    }
  }
  


  /// Api consumption

  // Get the form element
const form = document.getElementById('login-form');

// Get the input elements for the username and password
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Listen for the form submission event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the username and password values from the input elements
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Call the login API with the username and password
  login(username, password).then((response) => {
    // If the login was successful, redirect the user to the dashboard page
    if (response.status === 200) {
      window.location.href = '/dashboard';
    }
  });
});

// The login function that makes an API request to the login endpoint
function login(username, password) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
}
