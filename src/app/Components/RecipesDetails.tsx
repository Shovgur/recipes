import { Recipe } from "../data/recipes";

interface RecipeDetailsProps {
  recipe: Recipe;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  return (
    <div>
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
    </div>
  );
};

export default RecipeDetails;
