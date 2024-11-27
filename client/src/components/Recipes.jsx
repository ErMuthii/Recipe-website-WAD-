import React, { useState, useEffect } from "react";
import { Card, CardBody, Input, Button, Textarea } from "@nextui-org/react";
import {
  fetchRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  loadInitialRecipes,
} from "../api/recipeRoutes";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ title: "", ingredients: "", instructions: "" });
  const [editRecipe, setEditRecipe] = useState(null);

  useEffect(() => {
    fetchRecipesData();
    loadInitialRecipesData();
  }, []);

  async function fetchRecipesData() {
    try {
      const data = await fetchRecipes();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
    }
  }

  async function loadInitialRecipesData() {
    try {
      await loadInitialRecipes();
      fetchRecipesData(); // Refresh the recipe list after insertion
    } catch (error) {
      console.error(error.message);
    }
  }

  // Handle form submissions for new recipes
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const data = await createRecipe(
        newRecipe.title,
        newRecipe.ingredients,
        newRecipe.instructions
      );
      setRecipes([...recipes, ...data]);
      setNewRecipe({ title: "", ingredients: "", instructions: "" });
      alert("Recipe created successfully!");
    } catch (error) {
      console.error("Error creating recipe:", error.message);
      alert("Failed to create recipe. Please try again.");
    }
  };

  // Handle form submissions for editing recipes
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (editRecipe) {
      try {
        await updateRecipe(editRecipe.id, {
          title: editRecipe.title,
          ingredients: editRecipe.ingredients,
          instructions: editRecipe.instructions,
        });
        setRecipes((prev) =>
          prev.map((recipe) =>
            recipe.id === editRecipe.id ? { ...recipe, ...editRecipe } : recipe
          )
        );
        setEditRecipe(null);
        alert("Recipe updated successfully!");
      } catch (error) {
        console.error("Error updating recipe:", error.message);
        alert("Failed to update recipe. Please try again.");
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
      alert("Recipe deleted successfully!");
    } catch (error) {
      console.error("Error deleting recipe:", error.message);
      alert("Failed to delete recipe. Please try again.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Recipes</h1>

      {/* Create Recipe Form */}
      <Card className="mb-8 mx-auto max-w-lg">
        <CardBody>
          <h2 className="text-xl font-semibold mb-4">Create New Recipe</h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <Input
              label="Title"
              placeholder="Recipe Title"
              value={newRecipe.title}
              onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
              required
            />
            <Textarea
              label="Ingredients"
              placeholder="List of Ingredients"
              value={newRecipe.ingredients}
              onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
              required
            />
            <Textarea
              label="Instructions"
              placeholder="Cooking Instructions"
              value={newRecipe.instructions}
              onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
              required
            />
            <Button color="primary" type="submit" className="w-full">
              Create Recipe
            </Button>
          </form>
        </CardBody>
      </Card>

      {/* Edit Recipe Form */}
      {editRecipe && (
        <Card className="mb-8 mx-auto max-w-lg">
          <CardBody>
            <h2 className="text-xl font-semibold mb-4">Edit Recipe</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <Input
                label="Title"
                value={editRecipe.title}
                onChange={(e) => setEditRecipe({ ...editRecipe, title: e.target.value })}
                required
              />
              <Textarea
                label="Ingredients"
                value={editRecipe.ingredients}
                onChange={(e) => setEditRecipe({ ...editRecipe, ingredients: e.target.value })}
                required
              />
              <Textarea
                label="Instructions"
                value={editRecipe.instructions}
                onChange={(e) => setEditRecipe({ ...editRecipe, instructions: e.target.value })}
                required
              />
              <Button color="primary" type="submit" className="w-full">
                Update Recipe
              </Button>
            </form>
          </CardBody>
        </Card>
      )}

      {/* Recipe List */}
      <h2 className="text-2xl font-bold mb-4">Recipe List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id}>
            <CardBody>
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p className="mt-2"><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p className="mt-2"><strong>Instructions:</strong> {recipe.instructions}</p>
              <div className="flex justify-between mt-4">
                <Button onClick={() => setEditRecipe(recipe)} size="sm" color="warning">
                  Edit
                </Button>
                <Button onClick={() => handleDelete(recipe.id)} size="sm" color="error">
                  Delete
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;

