import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, School } from "lucide-react";
import { toast } from "sonner";

import TextInput from "@/components/FormInputs/TextInput";
import PasswordInput from "@/components/FormInputs/PasswordInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { useAuth } from "@/context/AuthContext";
import ComboboxInput from "@/components/FormInputs/ComboboxInput";
import { roles } from "@/utils/commonOptions";

export default function RegisterForm() {
  const { register: authRegister } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await authRegister(data);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error("Registration failed", {
        description: error.message || "An error occurred during registration",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 w-full max-w-md">
      <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          icon={User}
          label="Full Name"
          register={register}
          name="name"
          errors={errors}
          placeholder="John Doe"
        />
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
          errors={errors}
          placeholder="******"
        />
        <ComboboxInput
          label="Role"
          options={roles}
          register={register}
          name="role"
          errors={errors}
          placeholder="Select a role"
        />
        <SubmitButton
          buttonIcon={School}
          title="Create Account"
          loading={isLoading}
          loadingTitle="Registering..."
        />
      </form>

      <div className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-primary hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
