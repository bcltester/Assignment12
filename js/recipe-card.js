class Recipe {
    constructor(title, servings, arrIngredients) {
        this._title = title;
        this._servings = Math.floor(Number(servings));
        this._arrIngredients = arrIngredients;
    }
    display = function() {
        console.log(`${this._title}\n`);
        console.log(`Serves: ${this._servings}\n`);
        console.log(`Ingredients:\n`);
        for (let ingredient of this._arrIngredients) {
            console.log(`- ${ingredient}\n`);
        }
    }
}

const guac = new Recipe('Guacamole', 4.5, ['3 Avocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper']);
guac.display();
