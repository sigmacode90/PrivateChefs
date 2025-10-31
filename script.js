document.querySelector('.btn-primary').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});
