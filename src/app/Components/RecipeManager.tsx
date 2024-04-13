'use client'
import { useState } from "react";
import RecipesList from "./RecipesList";
import NewRecipeForm from "./NewRecipes";
import { Recipe, recipes as initialRecipes } from "../data/recipes";

const RecipeManager: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);

  const handleAddRecipe = (data: any) => {
    const newRecipe: Recipe = {
      id: recipes.length + 1,
      ...data,
      ingredients: data.ingredients.split("\n"),
      instructions: data.instructions.split("\n"),
    };
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <main className="text-black">
      <NewRecipeForm onSubmit={handleAddRecipe} />
      <RecipesList recipes={recipes} />
    </main>
  );
};

export default RecipeManager;
