// Function to handle the login process
function login(username, password) {
    // Create a JWT payload with the user's credentials
    const payload = {
      username: username,
      password: password,
      exp: Math.floor(Date.now() / 1000) + 15 * 60, // 15 minutes from now
    };
  
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
  