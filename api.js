const searchBox = document.getElementById('search-box')
const searchButton = document.getElementById('search-button')
searchButton.addEventListener('click',()=>searchFood(searchBox.value))

const searchFood= async (word)=>{
    const res = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
    const data = await res.json()
    showMenu(data.meals)

    console.log(data)
    searchBox.value = ""
}

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
       <ul>
           <li>${data.strMeasure1}${data.strIngredient1}</li>
           <li>${data.strMeasure2}${data.strIngredient2}</li>
           <li>${data.strMeasure3}${data.strIngredient3}</li>
           <li>${data.strMeasure4}${data.strIngredient4}</li>
           <li>${data.strMeasure5}${data.strIngredient5}</li>
           <li>${data.strMeasure6}${data.strIngredient6}</li>
           <li>${data.strMeasure7}${data.strIngredient7}</li>
       </ul>
       `
       
       details.innerHTML = detailsInfo;
}



