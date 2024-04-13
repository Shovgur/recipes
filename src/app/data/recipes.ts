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
    instructions: [
      "Шаг 1: Смешайте все ингредиенты",
      "Шаг 2: Выпекайте в духовке",
    ],
  },
  {
    id: 2,
    title: "Пирог с ягодами",
    image: "https://example.com/pie.jpg",
    description: "Вкусный пирог с ягодами",
    ingredients: ["Мука", "Сахар", "Ягоды", "Масло", "Яйца"],
    instructions: [
      "Шаг 1: Приготовьте тесто",
      "Шаг 2: Заложите ягоды",
      "Шаг 3: Выпекайте",
    ],
  },
];
