import Link from "next/link";
import { Recipe } from "../data/recipes";

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList: React.FC<RecipesListProps> = ({ recipes }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Список рецептов</h1>
      {recipes.map((recipe) => (
        <Link
          href={`/recipes/${recipe.id}`}
          key={recipe.id}
          className="border p-4 mb-4"
        >
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} className="w-full mb-2" />
          <p>{recipe.description}</p>
          <h3 className="font-bold mt-2">Ингредиенты:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="font-bold mt-2">Инструкции:</h3>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </Link>
      ))}
    </>
  );
};

export default RecipesList;
