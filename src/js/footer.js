// Секція також містить форму, що включає обовʼязкові
// до заповнення елементи <input> та кнопку
//  “Send" типу submit. Полю для введення
//   електронної пошти слід додати мінімальну
//   валідацію введених даних  за допомогою
//    атрибуту pattern="^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$".
//     У випадку, коли вміст введеного тексту
//     перевищує розмір поля input, відображується
//     тільки обмежена кількість символів, а р
//     ешта тексту позначається трьома крапками (...),
//     що показує, що текст був обрізаний.
// По clickу на кнопку "Send" необхідно відправити
//  POST запит на сервер про створення заявки щодо
//  співпраці та у разі успішного створення - повідомити
//   про це користувача, відкривши відповідне модальне
//    вікно, в цьому випадку слід також очистити форму.
//    Якщо з сервера буде повернута помилка - користувачеві
//    слід повідомити про це за допомогою вспливаючого
//     повідомлення і надати можливість відкорегувати
//      введені значення (не очищувати форму) для їх
//      подальшої повторної відправки.

// const inputs = document.querySelectorAll('.footer-input');

// const formMaxLength = 30;


// inputs.forEach(input => {
//     const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   input.addEventListener('input', e => {
//     if (!pattern.test(input.value)) {
//       input.style.borderBottom = '1px solid #fafafa';
//     } else {
//       input.style.borderBottom = '1px solid #3b3b3b';
//     }

//     if (input.value.length > formMaxLength) {
//       input.value = input.value.slice(0, formMaxLength - 3) + '...';
//     }
//   });
// });



const inputs = document.querySelectorAll('.footer-input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
const widthInput = Math.floor(input.offsetWidth / 9)
const inpText = input.value;

if (inpText.length > widthInput) {
    input.value = inpText.slice(0, widthInput - 3) + '...'
}


})
}) 


