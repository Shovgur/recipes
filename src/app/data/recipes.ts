
export interface Recipe {
    id: number;
    title: string;
    image: string;
    description: string;
    ingredients: string[];
    instructions: string[];
  }
  
  export const recipes: Recipe[] = [
    {
      id: 1,
      title: "Печенье с шоколадом",
      image: "https://example.com/cookie.jpg",
      description: "Простое и вкусное печенье с шоколадом",
      ingredients: ["Мука", "Сахар", "Шоколад", "Масло", "Яйца"],
      instructions: ["Шаг 1: Смешайте все ингредиенты", "Шаг 2: Выпекайте в духовке"],
    },
    // Добавьте другие рецепты здесь
    {
      id: 2,
      title: "Печенье с шоколадом",
      image: "https://example.com/cookie.jpg",
      description: "Простое и вкусное печенье с шоколадом",
      ingredients: ["Мука", "Сахар", "Шоколад", "Масло", "Яйца"],
      instructions: ["Шаг 1: Смешайте все ингредиенты", "Шаг 2: Выпекайте в духовке"],
    },
    // Добавьте другие рецепты здесь
  ];
  