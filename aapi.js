fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(res => res.json())
.then(data => showMenu(data.meals))

const showMenu = data => {
     console.log(data)
    const foodsListDiv = document.getElementById('foods-list');
    data.forEach(food => {
       const foodListDiv = document.createElement("div")
       foodListDiv.className = 'food-list'
       const foodList = `
            <img class="food-image" src="${food.strMealThumb}">
            <h3>${food.strMeal}</h3>
            `
            foodListDiv.innerHTML = foodList;
            foodsListDiv.appendChild(foodListDiv);
            foodListDiv.addEventListener('click',()=> getSingleFood(`${food.strMeal}`))         
    });
}

const getSingleFood = name => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => res.json())
    .then(data => renderFoodInfo(data.meals[0]))
}

const renderFoodInfo = data =>{
    console.log(data)
    const details = document.getElementById('food-details');
    detailsInfo = `
        <img src="${data.strMealThumb}" class="food-image">
        <h2>${data.strMeal}</h2>
        <h4>Ingredient</h4>
        `
    details.innerHTML = detailsInfo;
}