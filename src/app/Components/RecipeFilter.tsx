"use client";
import { useState } from "react";
import { Recipe } from "../data/recipes";

interface RecipeFilterProps {
  recipes: Recipe[];
  onFilter: (filteredRecipes: Recipe[]) => void;
}

const RecipeFilter: React.FC<RecipeFilterProps> = ({ recipes, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onFilter(filteredRecipes);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Поиск по названию"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Поиск
      </button>
    </div>
  );
};

export default RecipeFilter;
