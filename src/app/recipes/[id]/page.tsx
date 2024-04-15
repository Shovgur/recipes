"use client";
import { useState } from "react";
import RecipeDetails from "@/app/Components/RecipesDetails";
import { recipes } from "@/app/data/recipes";
import { Recipe } from "@/app/data/recipes";

import { useParams } from "next/navigation";

const RecipeDetailsPage: React.FC = () => {
  const [recipe, setRecipe] = useState(recipes);
  const { id } = useParams();

  const selectedRecipe = recipe.find(
    (recipe) => recipe.id === parseInt(id as string)
  );

  if (!selectedRecipe) {
    return <div>Рецепт не найден</div>;
  }

  const handleEdit = (updatedRecipe: Recipe) => {
    const updatedRecipes = recipe.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    setRecipe(updatedRecipes);
  };

  return <RecipeDetails onEdit={handleEdit} recipe={selectedRecipe} />;
};

export default RecipeDetailsPage;
