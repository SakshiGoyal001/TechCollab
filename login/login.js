function validateRollNumber() {
    var rollnoInput = document.getElementById('rollno');
    var rollnoError = document.getElementById('rollnoError');

    rollnoError.textContent = '';
   
    if (!/^\d+$/.test(rollnoInput.value)) {
      rollnoError.textContent = 'Invalid ID. Please enter only numeric characters.';
    }
  }

  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple check for demo purposes (not secure)
    if (username === '102103346' && password === 'password') {
      // Save username to local storage for demo purposes
      localStorage.setItem('username', username);
      window.location.href = '/TTC/index2.html'; // Redirect to the dashboard
    } else {
      alert('Login failed. Please check your username and password.');
    }
  }


  document.body.addEventListener("keypress", (e)=>{
    if(e.key=='Enter') login();
  });