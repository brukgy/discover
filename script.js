let myName = prompt (`Write your name`);
let myAge = +prompt (`write your age`);

// не працює name = user !!!
function enter (name = 'user', age) {
    if(age >= 18) {
        return (`${name} ${age} years. Login successful !`);
    }
    else if (age == ' ') {
        return (`you did not write an age!`);
    }
    else if (age < 18) {
        return (`No entrance !!!`);
    }
    else {
        return `you didn't write a number!`;
    }
}

let result = enter(myName, myAge);
alert(result);


// arrow function

// let enter = (name, age) => {
//     if(age >= 18) {
//         return (`${name}, ${age} years. Login successful!`);        }
//     else {
//         return (`No entrance!!!`);                }
// }

// let result = enter(myName, myAge);
// alert(result);



const burger_btn = document.querySelector('.header_burger-btn');
const burger_menu = document.querySelector('.burger-menu');
const black_bgc = document.querySelector('.black-bgc');
const burger_menu_close = document.querySelector('.burger-menu_close');

burger_btn.addEventListener('click', showMenu);
burger_menu_close.addEventListener('click', closeMenu);

function showMenu () {
    burger_menu.style.display = 'block';
    black_bgc.style.display = 'block';
}
function closeMenu () {
    burger_menu.style.display = 'none';
    black_bgc.style.display = 'none';
}