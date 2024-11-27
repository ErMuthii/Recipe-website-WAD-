import { supabase } from "../supabaseClient";

export const apiEndpoints = {
  // Secure endpoints - Users
  async getAllUsers(apiKey) {
    await this.validateApiKey(apiKey);
    const { data, error } = await supabase
      .from('users')
      .select('*');
    if (error) throw error;
    return data;
  },

  async getUserByEmail(email, apiKey) {
    await this.validateApiKey(apiKey);
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
    if (error) throw error;
    return data;
  },

  async getUsersByGender(gender, apiKey) {
    await this.validateApiKey(apiKey);
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('gender', gender);
    if (error) throw error;
    return data;
  },

  // Public endpoints - Recipes
  async getAllRecipes() {
    const { data, error } = await supabase
      .from('recipes')
      .select('*');
    if (error) throw error;
    return data;
  },

  async getRecipeById(id) {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async getRecipesByCategory(category) {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('category', category);
    if (error) throw error;
    return data;
  },

  // Secure endpoint - User's recipes
  async getUserRecipes(userId, apiKey) {
    await this.validateApiKey(apiKey);
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('user_id', userId);
    if (error) throw error;
    return data;
  },

  // Helper method to validate API key
  async validateApiKey(apiKey) {
    const { data, error } = await supabase
      .from('api_keys')
      .select('*')
      .eq('api_key', apiKey)
      .gte('expires_at', new Date().toISOString())
      .single();

    if (error || !data) {
      throw new Error('Invalid or expired API key');
    }
    return true;
  }
};