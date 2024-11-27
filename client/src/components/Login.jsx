import React from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { UserIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { supabase } from "../supabaseClient"; // Import your Supabase client

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Logging in with data:", data);

    try {
      // Use Supabase for user authentication
      const { user, error } = await supabase.auth.signIn({
        email: data.username, // Assumes username field holds email
        password: data.password,
      });

      if (error) {
        console.error("Login failed:", error.message);
        alert("Login failed. Please check your credentials.");
      } else {
        console.log("Login successful:", user);
        alert("Login successful");
        reset(); // Reset form after successful login
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="max-w-[400px] mx-auto">
        <CardBody>
          <h2 className="text-center mb-4 text-xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              isInvalid={!!errors.username}
              errorMessage={errors.username && errors.username.message}
              label="Email"
              placeholder="Enter your email"
              endContent={<UserIcon className="w-5 h-5 text-gray-400" />}
              {...register("username", { required: "Email is required" })}
            />

            <Input
              isRequired
              isInvalid={!!errors.password}
              errorMessage={errors.password && errors.password.message}
              type="password"
              label="Password"
              placeholder="Enter your password"
              endContent={<LockClosedIcon className="w-5 h-5 text-gray-400" />}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />

            <Button color="primary" type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
