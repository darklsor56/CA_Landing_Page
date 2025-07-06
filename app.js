document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('donateForm');
  const amountInput = document.getElementById('donationAmount');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const amount = amountInput.value;
      if (amount && parseFloat(amount) > 0) {
        window.location.href = 'thankyou.html';
      } else {
        alert('Please enter a valid donation amount.');
      }
    });
  }
});