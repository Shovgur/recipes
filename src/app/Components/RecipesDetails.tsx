import React, { useState } from "react";
import { Recipe } from "../data/recipes";

interface RecipeDetailsProps {
  recipe: Recipe;
  onEdit: (updatedRecipe: Recipe) => void;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState<Recipe>(recipe);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedRecipe({
      ...editedRecipe,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(editedRecipe);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedRecipe.title}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Сохранить</button>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="w-full mb-4" />
          <p>{recipe.description}</p>
          <h2 className="font-bold mt-4">Ингредиенты:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="font-bold mt-4">Инструкции:</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <button onClick={handleEdit}>Редактировать</button>
        </>
      )}
    </>
  );
};

export default RecipeDetails;
