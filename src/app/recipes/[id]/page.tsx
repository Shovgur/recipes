"use client";
import RecipeDetails from "@/app/Components/RecipesDetails";
import { recipes } from "@/app/data/recipes";

import { useParams } from "next/navigation";

const RecipeDetailsPage: React.FC = () => {
  const { id } = useParams();

  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === parseInt(id as string)
  );

  if (!selectedRecipe) {
    return <div>Рецепт не найден</div>;
  }

  return <RecipeDetails recipe={selectedRecipe} />;
};

export default RecipeDetailsPage;
