import { useState } from "react";
import { Recipe } from "../data/recipes";

interface RecipeFilterProps {
  recipes: Recipe[];
  onFilter: (filteredRecipes: Recipe[]) => void;
}

const RecipeFilter: React.FC<RecipeFilterProps> = ({ recipes, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tag, setTag] = useState("");

  const handleSearch = () => {
    const filteredRecipes = recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (tag === "" || recipe.tags.includes(tag.toLowerCase()))
    );
    onFilter(filteredRecipes);
  };

  const getAllTags = (recipes: Recipe[]): string[] => {
    return recipes.reduce((tags, recipe) => {
      if (recipe.tags) {
        return tags.concat(recipe.tags.map((tag) => tag.toLowerCase()));
      } else {
        return tags;
      }
    }, [] as string[]);
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
      <select
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="border p-2"
      >
        <option value="">Выберите тег</option>
        {getAllTags(recipes)
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
      </select>
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
