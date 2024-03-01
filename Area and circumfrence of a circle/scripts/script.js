const radiusInput = document.querySelector('#radius_input');
const calculateButton = document.querySelector('#calculate_button');
const paragraph = document.querySelector('.area_circumfrence > p');

calculateButton.addEventListener('click', calculateAreaCircumfrence);


function calculateAreaCircumfrence () {
    const radius = Number(radiusInput.value);
    const area = 22/7 * radius** 2;
    const circumfrence = 22/7 * radius * 2 ;
    paragraph.textContent = `The area of a circle with a radius of ${radius}cm 
    has an area of ${area.toFixed(2)}cm and a circumfrence of ${circumfrence.toFixed(2)}cm`
    paragraph.style.backgroundColor = 'green'
    radiusInput.value = '';
    radiusInput.focus();
}
