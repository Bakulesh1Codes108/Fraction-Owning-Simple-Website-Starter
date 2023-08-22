// Show popup
function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  // Close popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // Submit form
  function submitForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Age:', age);
    closePopup();
  }
  