import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import FormHeader from "@/components/Forms/Dashboard/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import PhoneInput from "@/components/FormInputs/PhoneInput";
import FormFooter from "@/components/Forms/Dashboard/FormFooter";
import { toast } from "sonner";
import ComboboxInput from "@/components/FormInputs/ComboboxInput";
import { BriefcaseBusiness, ImagePlus, MapPin, Settings } from "lucide-react";
import {
  contactMethods,
  departments,
  genders,
  titles,
} from "@/utils/schoolOptions";
import DateInput from "@/components/FormInputs/DateInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import { countries, qualifications, roles } from "@/utils/commonOptions";
import { Label } from "@/components/ui/label";
import TextArea from "@/components/FormInputs/TextAreaInput";
import CheckboxInput from "@/components/FormInputs/CheckboxInput";
import FileInput from "@/components/FormInputs/FileInput";
import PasswordInput from "@/components/FormInputs/PasswordInput";

export default function SchoolAdminForm({ editingId, initialData }) {
  //   const { schools, fetchSchools } = useSchools();
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(
    initialData?.imageUrl || "/user.png"
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // fetchSchools();
  }, []);

  const onSubmit = async (data) => {
    try {
      console.log("School Admin Data:", data);
      toast.success("School admin created successfully");
      reset();
    } catch (error) {
      toast.error("Failed to create school admin");
      console.error("Creation error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader
        href="/school-admin"
        parent=""
        title="Admin"
        editingId={editingId}
        loading={isLoading}
      />
      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-6">
          {/* Personal Info */}
          <div className="shadow-sm border rounded-lg overflow-hidden">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <ImagePlus className="w-5 h-5 text-primary" />
                <span>Personal Information</span>
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ComboboxInput
                  label="Title"
                  name="title"
                  placeholder="Select Title"
                  options={titles}
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="Full Name"
                  name="name"
                  placeholder="Enter full name"
                  register={register}
                  errors={errors}
                />
                <div className="grid grid-cols-2 gap-4">
                  <DateInput
                    label="Date of Birth"
                    name="birthDate"
                    placeholder="YYYY-MM-DD"
                    register={register}
                    errors={errors}
                  />
                  <ComboboxInput
                    label="Gender"
                    name="gender"
                    placeholder="Select Gender"
                    options={genders}
                    register={register}
                    errors={errors}
                  />
                </div>

                <TextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="email@school.edu"
                  register={register}
                  errors={errors}
                />
                <div className="space-y-4">
                  <ComboboxInput
                    label="Preferred Contact"
                    name="preferredContact"
                    placeholder="Select Preferred Method"
                    options={contactMethods}
                    register={register}
                    errors={errors}
                  />
                  <PhoneInput
                    label="Phone Number"
                    name="phone"
                    register={register}
                    errors={errors}
                  />
                  <PhoneInput
                    label="Emergency Number"
                    name="emergencyPhone"
                    register={register}
                    errors={errors}
                  />
                </div>

                <div className="flex items-start justify-center md:justify-start h-full">
                  <ImageInput
                    title="Admin Profile Photo"
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    endpoint="adminProfileImage"
                    className="object-contain w-full max-w-xs"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Address Info*/}
          <div className="shadow-sm border rounded-lg overflow-hidden mt-6">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Address Information</span>
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ComboboxInput
                  label="Country"
                  name="country"
                  placeholder="Select Country"
                  options={countries}
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="City"
                  name="city"
                  placeholder="Enter city"
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="State"
                  name="state"
                  placeholder="Enter state or province"
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="PIN Code"
                  name="postalCode"
                  placeholder="Enter postal code"
                  register={register}
                  errors={errors}
                />
                <div className="col-span-2">
                  <TextArea
                    label="Address"
                    name="address"
                    placeholder="Enter address"
                    register={register}
                    errors={errors}
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Professional Info */}
          <div className="shadow-sm border rounded-lg overflow-hidden mt-6">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <BriefcaseBusiness className="w-5 h-5 text-primary" />
                <span>Professional Information</span>
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <ComboboxInput
                  label="Highest Qualification"
                  name="qualifiaction"
                  placeholder="Select highest qualification"
                  options={qualifications}
                  register={register}
                  errors={errors}
                />
                <ComboboxInput
                  label="Position/Role"
                  name="role"
                  placeholder="Select Role"
                  options={roles}
                  register={register}
                  errors={errors}
                />
                <ComboboxInput
                  label="Department"
                  name="department"
                  placeholder="Select Department"
                  options={departments}
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="Employee ID"
                  name="employeeId"
                  placeholder="Enter Employee ID"
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="Total Experience (Years) "
                  name="experience"
                  placeholder="Enter years of experience"
                  register={register}
                  errors={errors}
                />
                <DateInput
                  label="Start Date"
                  name="startDate"
                  placeholder="YYYY-MM-DD"
                  register={register}
                  errors={errors}
                />
                <div className="col-span-2">
                  <TextArea
                    label="Professional Summary"
                    name="professionalSummary"
                    placeholder="Brief description of professional background and qualifications"
                    register={register}
                    errors={errors}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
                  <FileInput
                    name="idProof"
                    label="ID Proof"
                    description="Upload government-issued ID (Aadhaar, PAN, etc.)"
                    register={register}
                    errors={errors}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <FileInput
                    name="certificate"
                    label="Qualification Certificate"
                    description="Upload your highest qualification certificate"
                    register={register}
                    errors={errors}
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="shadow-sm border rounded-lg overflow-hidden mt-6">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                <span>Account Information</span>
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <TextInput
                    label="User Email"
                    name="userEmail"
                    placeholder="Enter user email"
                    toolTipText="It is used to login to the system"
                    register={register}
                    errors={errors}
                  />
                </div>

                <PasswordInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  toolTipText="It is used to login to the system"
                  register={register}
                  errors={errors}
                />
                <PasswordInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  register={register}
                  errors={errors}
                />
                <div className="grid grid-cols-1 gap-4">
                  <CheckboxInput
                    label="Send system notifications"
                    name="isSystemNotification"
                    register={register}
                    errors={errors}
                  />
                  <CheckboxInput
                    label="Set as temporary password"
                    name="isTemporaryPassword"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormFooter
        href="/school-admin"
        parent=""
        title="School Admin"
        editingId={editingId}
        loading={isLoading}
      />
    </form>
  );
}
