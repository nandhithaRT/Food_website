document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.getElementById('home');
    const menuBtn = document.getElementById('menu');
    const ordersBtn = document.getElementById('orders');
    const profileBtn = document.getElementById('profile');
    const italianBtn = document.getElementById('italian');
    const chineseBtn = document.getElementById('chinese');
    const dessertsBtn = document.getElementById('desserts');
    const searchBtn = document.getElementById('search-btn');

    homeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'food_website.html';
    });

    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'menu.html';
    });

    ordersBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'orders.html';
    });

    profileBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'profile.html';
    });

    italianBtn.addEventListener('click', function(e) {
        e.preventDefault();
        displayDishes("Italian");
    });

    chineseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        displayDishes("Chinese");
    });

    dessertsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        displayDishes("Desserts");
    });

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        searchDishes();
    });
});

function displayDishes(category) {
    const dishContainer = document.getElementById('dish-container');
    dishContainer.innerHTML = '';

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const dishes = data.categories[category];
            for (const dish of dishes) {
                const dishInfo = data.dishes[dish];
                const dishHTML = `
                    <div class="dish">
                        <img src="${dishInfo.image}" alt="${dish}">
                        <h3>${dish}</h3>
                        <p>$${dishInfo.price.toFixed(2)}</p>
                    </div>`;
                dishContainer.innerHTML += dishHTML;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function searchDishes() {
    const searchTerm = document.getElementById('search').value;
    alert('Search for: ' + searchTerm);
}
