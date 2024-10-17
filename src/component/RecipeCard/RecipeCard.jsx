import React, { useEffect, useState } from 'react';

const RecipeCard = () => {
    const [recipeDatas, setRecipeDatas] = useState([]);

    useEffect(() => {
        fetch('/Recipe.json') // Ensure it's the correct path relative to the public folder
            .then((res) => res.json())
            .then((data) => setRecipeDatas(data));
    }, []);

    return (
        <div>

            <div className="grid grid-cols-2 gap-6">
                {recipeDatas.map((recipe) => (
                    <div key={recipe.recipe_id} className="border p-4 rounded shadow-lg">
                        <img
                            src={recipe.recipe_image}
                            alt={recipe.recipe_name}
                            className="w-full h-52 object-cover mb-4 rounded-2xl" // Fixed height of 200px
                        />
                        <h2 className="text-xl font-bold mb-2">{recipe.recipe_name}</h2>
                        <p className="text-gray-500 mb-2">{recipe.short_description}</p>

                        <h3 className="font-semibold mt-4">Ingredients: ({recipe.ingredients.length})</h3>
                        {/* Show the number of ingredients */}
                        <ul className="list-disc list-inside mb-2">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>

                        <p className="mb-2">Preparing time: {recipe.preparing_time}</p>
                        <p className="mb-2">Calories: {recipe.calories}</p>

                        <button
                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                            Want to Cook
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeCard;
