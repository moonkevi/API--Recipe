import { getData } from "./api.js";

const recipeContainer = document.querySelector("#container");
const section = document.createElement('section');
section.className = "recipe-section";
recipeContainer.appendChild(section);


function displayRecipes(recipeData){
    section.innerHTML = "";
    recipeData.forEach(recipe => {
        const recipeDiv = document.createElement('div')
        recipeDiv.className = 'recipe-items'

        const recipeName = document.createElement('h2');
        recipeName.textContent = recipe.name;

        const recipeIngredient = document.createElement('p');
        recipeIngredient.textContent = recipe.ingredients.join(", ");

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.name;

        recipeDiv.appendChild(recipeImage);
        recipeDiv.appendChild(recipeName);
        recipeDiv.appendChild(recipeIngredient);

        section.appendChild(recipeDiv);

    });
}

async function getRecipes() {
    const recipes = await getData();

    if(!recipes){
        document.body.textContent = `unable to load recipes, try again`;
        return;
    }

    if(recipes.length === 0){
           document.body.textContent = `No recipes found.`;
           return;
    }

    displayRecipes(recipes);
}

getRecipes();