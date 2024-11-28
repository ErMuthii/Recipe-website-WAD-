import { supabase } from '../config/supabase.js';

const getAllUsers = async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .select('id, email, username, gender');
  
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const getUserByIdentifier = async (req, res) => {
  const { identifier } = req.params;
  const query = identifier.includes('@') 
    ? supabase.from('users').select().eq('email', identifier)
    : supabase.from('users').select().eq('id', identifier);
  
  const { data, error } = await query.single();
  
  if (error) return res.status(404).json({ error: 'User not found' });
  res.json(data);
};

const getUsersByGender = async(req,res) =>{
  const {gender} = req.params;

  if(gender !== 'Male' && gender!=='Female'){
    return res.status(400).json({error:"Gender must be either male or female"})
  }
  const {data,error} = await supabase
    .from('users')
    .select('id,email,username,gender')
    .eq('gender',gender);

  if(error) return res.status(500).json({error:error.message});
  res.json(data)
}

export { getAllUsers, getUserByIdentifier,getUsersByGender };