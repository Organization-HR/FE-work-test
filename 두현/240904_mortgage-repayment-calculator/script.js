document.getElementById('clear-all').addEventListener('click', () => {
  const form = document.getElementById('calculator-form');
  form.reset();
});

document.querySelectorAll('.calculater_form__radio-button input').forEach(radio => {
  radio.addEventListener('change', function () {
    updateParentStyles(this);
  });
});


function updateParentStyles(radio) {
  const parent = radio.closest('.calculater_form__radio-button');

  document.querySelectorAll('.calculater_form__radio-button').forEach(el => {
    el.style.backgroundColor = 'hsl(0, 0%, 100%)'; 
    el.style.borderColor = 'hsl(200, 24%, 40%)'; 
  });

  if (radio.checked) {
    parent.style.backgroundColor = 'hsl(61, 70%, 90%)';
    parent.style.borderColor = 'hsl(61, 70%, 52%)';
  }
}