import './index.css'
import React from 'react';
// TODO: Add import for RecipeTitle
import RecipeTitle from './RecipeTitle'

// TODO: Import IngredientList
import IngredientList from './IngredientList'
import RecipeSteps from './StepsForRecipe';

function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        steps: [
            { name: 'Add cut potatoes to a pot of heavily salted water.', prepared: false },
            { name: 'Bring pot to a boil.', prepared: false },
            { name: 'Boil the potatoes until fork tender, about 15-20 minutes.', prepared: false },
            { name: 'Strain the potatoes.', prepared: false },
            { name: 'Return potatoes to pot.', prepared: false },
            { name: 'Add butter, cream, salt, and pepper to taste.', prepared: false },
            { name: 'Mash potatoes.', prepared: true },
            { name: 'Reseason and add butter and cream as desired.', prepared: true }
        ]
    };
    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            {/* Add RecipeSteps component */}
            <RecipeSteps steps= {recipe.steps} />
        </article>
    )
}

export default App;