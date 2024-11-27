import { supabase } from "../supabaseClient";
import axios from "axios";

// Fetch all recipes
export async function fetchRecipes() {
  const { data, error } = await supabase.from("recipes").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

// Create a new recipe
export async function createRecipe(title, ingredients, instructions) {
  const { data, error } = await supabase
    .from("recipes")
    .insert([{ title, ingredients, instructions }]);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

// Update an existing recipe
export async function updateRecipe(id, updatedFields) {
  const { data, error } = await supabase
    .from("recipes")
    .update(updatedFields)
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

// Delete a recipe
export async function deleteRecipe(id) {
  const { data, error } = await supabase
    .from("recipes")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

// Load initial recipes from TheMealDB API
export async function loadInitialRecipes() {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
    const mealData = response.data.meals;

    if (mealData) {
      const formattedMeals = mealData.map((meal) => ({
        title: meal.strMeal,
        ingredients: meal.strIngredient1 ? meal.strIngredient1 : "No ingredients available",
        instructions: meal.strInstructions ? meal.strInstructions : "No instructions available",
      }));

      // Insert meals into the database if not already present
      for (const meal of formattedMeals) {
        await supabase.from("recipes").upsert(meal, { onConflict: "title" });
      }
      return await fetchRecipes();
    }
  } catch (error) {
    throw new Error("Error loading initial recipes from TheMealDB: " + error.message);
  }
} 