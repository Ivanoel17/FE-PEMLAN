

document.addEventListener('DOMContentLoaded', function () {
    const switchers = [...document.querySelectorAll('.switcher')];
  
    switchers.forEach(item => {
      item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'));
        this.parentElement.classList.add('is-active');
      });
    });
    
    const loginForm = document.querySelector('.form-login');
    const loginButton = document.getElementById('loginButton');
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
    
      // Get the values from the form
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      loginButton.classList.add('btn-login-clicked');
      const apiUrl = 'https://tsthealthcare.livelycliff-504ee3e2.southeastasia.azurecontainerapps.io/token';
      
    
      // Make the API request using Fetch API
      
      const formData = new URLSearchParams();
      formData.append('grant_type', 'password');
      formData.append('username', username);
      formData.append('password', password);
      
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData
      });
      
      // Rest of your code...
      
    
        if (response.ok) {
            window.location.href = "https://tsthealthcare.livelycliff-504ee3e2.southeastasia.azurecontainerapps.io/docs";
        } else {
            try {
                const errorData = await response.json();
                console.log('Error Response:', errorData);
                
            } catch (error) {
                console.error('Error parsing JSON:', error);
                
            }
            finally {
              // Remove the 'btn-login-clicked' class to revert the button color
              loginButton.classList.remove('btn-login-clicked');
          }
        }
        
    });
  });
  


