function getNextPage(pageName){
    window.location= pageName;
};

document.getElementById('home').addEventListener('click', 
() => {
    getNextPage('index.html')
});

const textBar = document.getElementById('menu-text');
const catagorismenu = document.getElementById('catagoris');
const shoppingCard = document.getElementById('shopping-card-menu');

document.getElementById('menu').addEventListener('click', 
() => {
    textBar.style.display = 'block';
    textBar.style.left = '10px';
});

document.getElementById('minus-inp').addEventListener('click', 
() => {
    textBar.style.display = '';
    catagorismenu.style.display = '';
});



document.getElementById('catagoris-menu').addEventListener('click', 
() => {
    catagorismenu.style.display = 'block';
});

document.getElementById('catagoris-minus').addEventListener('click', 
() => {
    catagorismenu.style.display = '';
});

document.getElementById('shopping-card').addEventListener('click', 
() => {
  shoppingCard.style.display = 'block';
});

document.getElementById('shopping-minus').addEventListener('click', 
() => {
    shoppingCard.style.display = '';
});

document.getElementById('login').addEventListener('click',
(enevt) => {
    getNextPage('login.html');
    
})




