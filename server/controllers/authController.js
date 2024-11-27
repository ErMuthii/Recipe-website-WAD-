const supabase = require('../config/supabase');
const { generateAPIToken } = require('../config/apiTokenGenerator');

const registerUser = async (req, res) => {
  try {
    const { email, password, name, gender } = req.body;
    
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          gender
        }
      }
    });

    if (error) throw error;

    const apiToken = generateAPIToken(user.id);

    res.status(201).json({
      message: 'User registered successfully',
      userId: user.id,
      apiToken: apiToken
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser };