import React from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/20/solid";
import { supabase } from "../supabaseClient.js"
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Registration = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitting registration form with data:", data);
    try {
      const {data: userData, error} = await supabase
        .from('users')
        .insert([
          {username:data.username,email:data.email,password: data.password}
        ]);
      if (error){
        throw error;
      }

      alert("Registration successful");
      reset();
    } catch(error){
      alert("An error occurred. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google Login successful:", response);
    // You can use the response object to authenticate the user
    alert("Google registration successful");
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google Login failed:", error);
    alert("Google registration failed. Please try again.");
  };

  const password = watch("password");

  return (
    <GoogleOAuthProvider clientId="recipe-website-434911">
      <div className="max-w-2xl mx-auto p-4">
        <Card className="max-w-[400px] mx-auto">
          <CardBody>
            <h2 className="text-center mb-4 text-xl font-bold">
              Registration Form
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                isInvalid={!!errors.username}
                errorMessage={errors.username && errors.username.message}
                label="Username"
                placeholder="Enter your username"
                endContent={<UserIcon className="w-5 h-5 text-gray-400" />}
                {...register("username", { required: "Username is required" })}
              />

              <Input
                isInvalid={!!errors.email}
                errorMessage={errors.email && errors.email.message}
                type="email"
                label="Email"
                endContent={<EnvelopeIcon className="w-5 h-5 text-gray-400" />}
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              <Input
                isRequired
                isInvalid={!!errors.password}
                errorMessage={errors.password && errors.password.message}
                type="password"
                label="Password"
                placeholder="Enter your password"
                endContent={
                  <LockClosedIcon className="w-5 h-5 text-gray-400" />
                }
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <Input
                isRequired
                isInvalid={!!errors.confirmPassword}
                errorMessage={
                  errors.confirmPassword && errors.confirmPassword.message
                }
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                endContent={<LockOpenIcon className="w-5 h-5 text-gray-400" />}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />

              <Button color="primary" type="submit" className="w-full">
                Register
              </Button>

              {/* Google Login Button */}
              <div className="mt-4">
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={handleGoogleLoginFailure}
                />
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Registration;
