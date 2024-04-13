import { useForm } from "react-hook-form";

interface NewRecipeFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  title: string;
  image: string;
  description: string;
  ingredients: string;
  instructions: string;
}

const NewRecipeForm: React.FC<NewRecipeFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-4">
        <label htmlFor="title" className="block font-bold mb-1">
          Название
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
          className="w-full border px-2 py-1"
        />
        {errors.title && (
          <span className="text-red-500">Название обязательно</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block font-bold mb-1">
          Изображение (URL)
        </label>
        <input
          type="text"
          id="image"
          {...register("image", { required: true })}
          className="w-full border px-2 py-1"
        />
        {errors.image && (
          <span className="text-red-500">Изображение обязательно</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block font-bold mb-1">
          Описание
        </label>
        <textarea
          id="description"
          {...register("description", { required: true })}
          className="w-full border px-2 py-1"
        />
        {errors.description && (
          <span className="text-red-500">Описание обязательно</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block font-bold mb-1">
          Ингредиенты
        </label>
        <textarea
          id="ingredients"
          {...register("ingredients", { required: true })}
          className="w-full border px-2 py-1"
        />
        {errors.ingredients && (
          <span className="text-red-500">Ингредиенты обязательны</span>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="instructions" className="block font-bold mb-1">
          Инструкции
        </label>
        <textarea
          id="instructions"
          {...register("instructions", { required: true })}
          className="w-full border px-2 py-1"
        />
        {errors.instructions && (
          <span className="text-red-500">Инструкции обязательны</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Создать рецепт
      </button>
    </form>
  );
};

export default NewRecipeForm;
