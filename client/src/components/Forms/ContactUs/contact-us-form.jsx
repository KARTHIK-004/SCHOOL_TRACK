import ComboboxInput from "@/components/FormInputs/ComboboxInput";
import PhoneInput from "@/components/FormInputs/PhoneInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextArea from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { countries } from "@/utils/contactOptions";
import { mediaSources, roles } from "@/utils/contactOptions";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useContact } from "@/context/ContactContext";
import { toast } from "sonner";

function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { submitContact, isLoading } = useContact();

  const onSubmit = async (data) => {
    try {
      await submitContact(data);
      toast.success("Contact Submitted!");
    } catch (error) {
      toast.error("Submission Failed", {
        description: error.message || "An error occurred during submission",
      });
    }
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Full Name"
        register={register}
        name="name"
        errors={errors}
        placeholder="John Doe"
      />
      <div className="grid md:grid-cols-2 gap-4">
        <TextInput
          label="Email Address"
          register={register}
          name="email"
          type="email"
          errors={errors}
          placeholder="Eg. johndoe@gmail.com"
        />
        <PhoneInput
          register={register}
          errors={errors}
          name="phone"
          label="Phone Number"
          toolTipText="Please provide a valid phone number"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <TextInput
          label="School Name"
          register={register}
          name="school"
          errors={errors}
          placeholder="Evernote High School"
        />
        <ComboboxInput
          register={register}
          errors={errors}
          name="country"
          label="Country"
          options={countries}
          placeholder="Select a Country"
          showSearch
          toolTipText="Select a Country"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <TextInput
          label="School Website/Social Media Page(fb,linkedin)"
          register={register}
          name="website"
          errors={errors}
          placeholder="https://www.evernotehighschool.com"
        />
        <TextInput
          label="Number of Students"
          register={register}
          name="students"
          type="number"
          errors={errors}
          placeholder="500"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <ComboboxInput
          register={register}
          errors={errors}
          name="role"
          label="Role"
          options={roles}
          placeholder="Select a role"
          toolTipText="Select a role that best describes your position."
          showSearch
        />
        <ComboboxInput
          register={register}
          errors={errors}
          name="media"
          label="How did you hear about us?"
          options={mediaSources}
          placeholder="Select a platform"
          toolTipText="Select the platform or source where you found us."
        />
      </div>
      <TextArea
        label="Please share with us the key pain points you want to solve"
        register={register}
        name="points"
        errors={errors}
      />
      <SubmitButton
        buttonIcon={Send}
        title="Submit"
        loading={isLoading}
        loadingTitle="Submitting..."
      />
    </form>
  );
}

export default ContactUsForm;
