const linkText = document.querySelector('#linkText');

linkText.addEventListener('click', function (event) {
    this.textContent = prompt('Enter the link text');
    event.preventDefault();
})
