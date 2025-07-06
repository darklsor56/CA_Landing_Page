document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('donateForm');
  const amountInput = document.getElementById('donationAmount');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const amount = parseFloat(amountInput.value).toFixed(2);

      if (!isNaN(amount) && amount >= 1.00) {
        window.location.href = 'thankyou.html';
      } else {
        alert('Please enter a valid donation of at least $1.00');
      }
    });
  }
});