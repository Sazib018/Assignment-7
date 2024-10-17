import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Importing toast
import 'react-toastify/dist/ReactToastify.css'; // Importing toast CSS

const RecipeCard = () => {
    const [recipeDatas, setRecipeDatas] = useState([]);
    const [wantToCookRecipes, setWantToCookRecipes] = useState([]);

    useEffect(() => {
        fetch('/Recipe.json')
            .then((res) => res.json())
            .then((data) => setRecipeDatas(data));
    }, []);

    const handelToCook = (recipe) => {
        if (wantToCookRecipes.some(r => r.recipe_id === recipe.recipe_id)) {
            toast.error('This recipe is already added to the cook list.');
            return;
        } else {
            setWantToCookRecipes([...wantToCookRecipes, recipe]);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row">
            {/* Recipe cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-3/4">
                {
                    recipeDatas.map((recipe) => (
                        <div key={recipe.recipe_id} className="border p-4 rounded shadow-lg flex flex-col h-full justify-between">
                            <div>
                                <img
                                    src={recipe.recipe_image}
                                    alt={recipe.recipe_name}
                                    className="w-full h-52 object-cover mb-4 rounded-2xl"
                                />
                                <h2 className="text-xl font-bold mb-2">{recipe.recipe_name}</h2>
                                <p className="text-gray-500 mb-2">{recipe.short_description}</p>

                                <h3 className="font-semibold mt-4">Ingredients: ({recipe.ingredients.length})</h3>
                                <ul className="list-disc list-inside mb-2">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <p className="mb-2">Preparing time: {recipe.preparing_time}</p>
                                <p className="mb-2">Calories: {recipe.calories}</p>

                                <button
                                    onClick={() => handelToCook(recipe)}
                                    className="mt-2 px-6 py-3 rounded-[50px] bg-green-500 text-black font-semibold hover:bg-red-600"
                                >
                                    Want to Cook
                                </button>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-[650px] mt-8 lg:mt-0 lg:ml-6 border p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-center mb-4">Want to Cook:({wantToCookRecipes.length}) </h2>

                <div className="w-full">
                    <div className="text-left font-medium mt-8 text-[#878787] grid grid-cols-3 gap-2 lg:ml-3">
                        <div>Name</div>
                        <div>Time</div>
                        <div>Calories</div>
                    </div>

                    <ul className="mt-2">
                        {
                            wantToCookRecipes.map((recipe) => (
                                <li key={recipe.recipe_id} className="grid grid-cols-3 gap-4 items-center border-b py-2 mb-7">
                                    <div className="flex items-center">
                                        <span className="text-[#282828CC] font-semibold mr-2">{recipe.recipe_id}:</span> 
                                        <span>{recipe.recipe_name}</span>
                                    </div>
                                    <div>{recipe.preparing_time}</div>
                                    <div className="flex justify-between items-center">
                                        <span>{recipe.calories}</span>
                                        <button
                                            className="md:px-4 md:py-3 bg-[#0BE58A] text-black rounded-[50px] hover:bg-green-800 hover:text-white "
                                        >
                                            Preparing
                                        </button>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RecipeCard;
