import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Lock, LogIn, Mail } from "lucide-react";

import TextInput from "@/components/FormInputs/TextInput";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { Skeleton } from "@/components/ui/skeleton";

import { toast } from "sonner";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      //   await signIn(data.email, data.password);
      toast.success("Success", {
        description: "Welcome back!",
      });
      reset();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Sign In Failed", {
        description: "An error occurred during sign in",
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
            to="/sign-up"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
