burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.search-box')

burger.addEventListener('click', () => {

    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp');


})

const searchFun = () => {
    let filter = document.getElementById('myinput').value.toUpperCase();

    var arr = ["ELLIE", "DINA", "JOEL", "ABBY"];

   let magna = document.querySelector('i')
    for (var i = 0; i < 4; i++) 
    {
        if (filter == arr[i] ) 
        {  
            arr[i].toLowerCase();       
             open(arr[i] + '.html');
        }
    }
    if (filter == 'HOME' || filter=='CONTACT US') 
    {
        open('index.html');
    }
}