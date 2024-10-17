import React from 'react';

const RecipeAdd = () => {

    const addToWantToCook = (recipe) => {
        // Check if the recipe is already added
        if (wantToCookRecipes.some(r => r.recipe_id === recipe.recipe_id)) {
            toast.error('This recipe is already in your Want to Cook list!');
            return;
        }
        
        setWantToCookRecipes([...wantToCookRecipes, recipe]);
        /* toast.success('Recipe added to Want to Cook!'); */
    };

    const startCooking = (recipe) => {
        toast.success(`You are starting to prepare ${recipe.recipe_name}`);
    };
    return (
        <div className='max-w-[514px] mx-auto rounded-2xl bg-[#d73c3c33]'>
          
        </div>
    );
};

export default RecipeAdd;