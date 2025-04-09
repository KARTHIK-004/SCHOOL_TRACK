import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Lock, LogIn, Mail } from "lucide-react";

import TextInput from "@/components/FormInputs/TextInput";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";

import { toast } from "sonner";

import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      await login(data);
      toast.success("Welcome back!");
      navigate("/");
    } catch (error) {
      toast.error("Sign In Failed", {
        description: error.message || "An error occurred during sign in",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8 w-full max-w-md">
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          icon={Mail}
          label="Email Address"
          register={register}
          name="email"
          type="email"
          errors={errors}
          placeholder="Eg. johndoe@gmail.com"
        />
        <PasswordInput
          icon={Lock}
          label="Password"
          register={register}
          name="password"
          type="password"
          errors={errors}
          placeholder="******"
          forgotPasswordLink="/forgot-password"
        />

        <SubmitButton
          buttonIcon={LogIn}
          title="Sign In"
          loading={isLoading}
          loadingTitle="Signing in..."
        />
      </form>
      <div className="text-center lg:text-left">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
