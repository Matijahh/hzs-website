
window.onload = function() {
  document.getElementById('forma').style.opacity = 1;
};

/* Slanje forme klikom na submit */
const form = document.forms['prijava'];
const scriptURL =
  '';

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
  send();
});


