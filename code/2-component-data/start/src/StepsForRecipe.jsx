import './StepsForRecipe.css'
import React from 'react';

function RecipeSteps(props) {
    // Create the recipe steps using map
    const recipeSteps = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each step
            <li key={index} className={ step.prepared ? 'prepared' : '' }>
                { step.name }
            </li>
        );
    });

    // return the HTML for the component
    // recipeSteps will be rendered as ol elements
    return (
        <ol>
            { recipeSteps }
        </ol>
    );
}

export default RecipeSteps;