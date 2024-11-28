import { supabase } from '../config/supabase.js'; // Adjust the import based on your setup
import { generateAPIToken } from '../config/apiTokenGenerator.js'; // Import the token generator
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

export const registerUser = async (req, res) => {
  const { username, email, password,gender } = req.body;

  try {
    // Step 1: Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt round of 10

    // Step 2: Insert user data into the users table
    const { data, error: dbError } = await supabase
      .from('users')
      .insert([{ username, email, password: hashedPassword,gender }])
      .select(); // Use .select() to return the inserted data

    // Log the response from Supabase
    console.log("Supabase Response:", { data, dbError });

    // Step 3: Handle database insertion errors
    if (dbError) {
      return res.status(400).json({ error: dbError.message });
    }

    // Step 4: Check if the user was created successfully
    if (!data || data.length === 0) {
      return res.status(400).json({ error: "User creation failed" });
    }

    const userId = data[0].id; // Access the id of the newly created user

    // Step 5: Generate an API token
    const token = generateAPIToken(userId); // Use userId for token generation

    // Step 6: Respond with success message and token
    return res.status(201).json({
      message: "User registered successfully",
      token: token,
      user: {
        username,
        email,
        gender,
      },
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

