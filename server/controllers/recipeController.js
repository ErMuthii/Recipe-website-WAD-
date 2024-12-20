import { supabase } from '../config/supabase.js';

const getAllRecipes = async (req, res) => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*');
  
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const getRecipeById = async (req, res) => {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', req.params.id)
    .single();
  
  if (error) return res.status(404).json({ error: 'Recipe not found' });
  res.json(data);
};

const getRecipesByCategory = async (req, res) => {
  const category = req.params.category;

  const validCategories = ['Breakfast','Lunch','Dinner'];
  if(!validCategories.includes(category)){
    return res.status(400).json({error:'Invalid category. Valid categories are Breakfast,Lunch,Dinner'})
  }
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('category', category);
  
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

export { getAllRecipes, getRecipeById, getRecipesByCategory };
  