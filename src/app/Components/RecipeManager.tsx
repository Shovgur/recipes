"use client";
import { useState } from "react";
import RecipeFilter from "./RecipeFilter";
import RecipesList from "./RecipesList";
import NewRecipeForm from "./NewRecipes";
import { Recipe, recipes as initialRecipes } from "../data/recipes";

const RecipeManager: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  const handleAddRecipe = (data: any) => {
    const newRecipe: Recipe = {
      id: recipes.length + 1,
      ...data,
      ingredients: data.ingredients.split("\n"),
      instructions: data.instructions.split("\n"),
    };
    setRecipes([...recipes, newRecipe]);
    setFilteredRecipes([...recipes, newRecipe]);
  };

  const handleFilter = (filteredRecipes: Recipe[]) => {
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <main className="text-black">
      <NewRecipeForm onSubmit={handleAddRecipe} />
      <RecipeFilter recipes={recipes} onFilter={handleFilter} />
      <RecipesList recipes={filteredRecipes} />
    </main>
  );
};

export default RecipeManager;
