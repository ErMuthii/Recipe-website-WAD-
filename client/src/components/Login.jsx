import React from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { UserIcon, LockClosedIcon } from "@heroicons/react/20/solid";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Logging in with data:", data); // Log data to verify form data
    try {
      const response = await fetch("https://your-api-endpoint.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Login successful");
        alert("Login successful");
        reset(); // Reset form after successful login
      } else {
        console.log("Login failed");
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log("Error logging in:", error);
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
              label="Username"
              placeholder="Enter your username"
              endContent={<UserIcon className="w-5 h-5 text-gray-400" />}
              {...register("username", { required: "Username is required" })}
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
