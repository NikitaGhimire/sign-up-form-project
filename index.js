document.getElementById('signup-form').addEventListener('submit', function(event) {
  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var isValid = true;

  // Validate First Name
  if (firstName.value === '') {
    document.getElementById('error-first-name').innerHTML = 'First name is required';
    isValid = false;
  } else {
    document.getElementById('error-first-name').innerHTML = '';
  }

  // Validate Last Name
  if (lastName.trim() === '') {
    document.getElementById('error-last-name').innerHTML = 'Last name is required';
    isValid = false;
  } else {
    document.getElementById('error-last-name').innerHTML = '';
  }

  // Validate Email
  if (email.trim() === '') {
    document.getElementById('error-email').innerHTML = 'Email is required';
    isValid = false;
  } else {
    document.getElementById('error-email').innerHTML = '';
  }

  // Validate Phone Number
  if (phone.trim() === '') {
    document.getElementById('error-phone').innerHTML = 'Phone number is required';
    isValid = false;
  } else {
    document.getElementById('error-phone').innerHTML = '';
  }

  // Validate Password
    
    if (password.trim() === '') {
      document.getElementById('error-password').innerHTML = 'Password is required';
      isValid = false;
    } else {
      document.getElementById('error-password').innerHTML = ''; // Corrected: Clearing error message if password is not empty
    }
  
    // Validate Confirm Password
    if (confirmPassword.trim() === '') {
      document.getElementById('error-confirm-password').innerHTML = 'Confirm password is required';
      isValid = false;
    } else if (password != confirmPassword) {
      document.getElementById('error-confirm-password').innerHTML = 'Passwords do not match';
      isValid = false;
    } else {
      document.getElementById('error-confirm-password').innerHTML = ''; // Corrected: Clearing error message if passwords match
    }
    if (!isValid) {
      event.preventDefault(); // Prevent form submission if any field is invalid
    }
  });