import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import TextInput from "@/components/FormInputs/TextInput";
import PhoneInput from "@/components/FormInputs/PhoneInput";
import DateInput from "@/components/FormInputs/DateInput";
import FileInput from "@/components/FormInputs/FileInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import TextArea from "@/components/FormInputs/TextAreaInput";
import CheckboxInput from "@/components/FormInputs/CheckboxInput";
import ComboboxInput from "@/components/FormInputs/ComboboxInput";
import FormHeader from "@/components/Forms/Dashboard/FormHeader";
import FormFooter from "@/components/Forms/Dashboard/FormFooter";

import { Building2, ImagePlus, MapPin, School, Settings } from "lucide-react";
import {
  boards,
  durations,
  paymentMethods,
  schoolTypes,
  subscriptionPlans,
} from "@/utils/schoolOptions";
import { countries } from "@/utils/commonOptions";

export default function SchoolForm({ editingId, initialData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [logoUrl, setLogoUrl] = useState(
    initialData?.logoUrl || "/school-logo.png"
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {},
  });

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log("School Data:", data);

      const formData = {
        ...data,
        logoUrl,
      };

      if (!editingId) {
        reset();
      }
    } catch (error) {
      toast.error("Failed to create school");
      console.error("Creation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormHeader
        href="/dashboard/schools"
        parent="Schools"
        title="School"
        editingId={editingId}
        loading={isLoading}
      />

      <div className="grid grid-cols-12 gap-6 py-8">
        <div className="lg:col-span-12 col-span-full space-y-6">
          {/* Basic Info */}
          <div className="shadow-sm border rounded-lg overflow-hidden">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <School className="w-5 h-5 text-primary" />
                <span>Basic Information</span>
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="School Name"
                  name="name"
                  placeholder="Enter school name"
                  register={register}
                  errors={errors}
                  required
                />
                <ComboboxInput
                  label="School Type"
                  name="type"
                  placeholder="Select school type"
                  options={schoolTypes}
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="Registration Number"
                  name="registrationNumber"
                  placeholder="Enter registration number"
                  register={register}
                  errors={errors}
                />
                <DateInput
                  label="Established Date"
                  name="establishedDate"
                  placeholder="YYYY-MM-DD"
                  register={register}
                  errors={errors}
                />
                <ComboboxInput
                  label="Board/Curriculum"
                  name="board"
                  placeholder="Select board or curriculum"
                  options={boards}
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="Website"
                  name="website"
                  placeholder="https://www.schoolwebsite.com"
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="contact@school.edu"
                  register={register}
                  errors={errors}
                  required
                />
                <PhoneInput
                  label="Phone Number"
                  name="phone"
                  register={register}
                  errors={errors}
                  required
                />
                <div className="md:col-span-2">
                  <TextArea
                    label="School Description"
                    name="description"
                    placeholder="Brief description of the school"
                    register={register}
                    errors={errors}
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div className="shadow-sm border rounded-lg overflow-hidden mt-6">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Address Information</span>
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 space-y-4">
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>
                <div className="">
                  <TextArea
                    label="Address"
                    name="address"
                    placeholder="Enter complete address"
                    register={register}
                    errors={errors}
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Administrative Information */}
          <div className="shadow-sm border rounded-lg overflow-hidden mt-6">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                <span>Administrative Information</span>
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextInput
                    label="Principal's Name"
                    name="principalName"
                    placeholder="Enter principal's name"
                    register={register}
                    errors={errors}
                    required
                  />
                  <TextInput
                    label="Principal's Email"
                    name="principalEmail"
                    type="email"
                    placeholder="Enter principal's email"
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PhoneInput
                    label="Principal's Phone"
                    name="principalPhone"
                    placeholder="Enter principal's phone"
                    register={register}
                    errors={errors}
                    required
                  />
                  <TextInput
                    label="Registration Number"
                    name="schoolRegistrationNumber"
                    placeholder="Enter school registration number"
                    register={register}
                    errors={errors}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextInput
                    label="Tax ID / PAN"
                    name="taxId"
                    placeholder="Enter tax ID or PAN"
                    register={register}
                    errors={errors}
                  />
                  <TextInput
                    label="Affiliation Number"
                    name="affiliationNumber"
                    placeholder="Enter affiliation number"
                    register={register}
                    errors={errors}
                  />
                  <ComboboxInput
                    label="Affiliation Board"
                    name="affiliationBoard"
                    placeholder="Select affiliation board"
                    options={boards}
                    register={register}
                    errors={errors}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextArea
                    label="Vision"
                    name="vision"
                    placeholder="Enter school's vision statement"
                    register={register}
                    errors={errors}
                    rows={3}
                  />
                  <TextArea
                    label="Mission"
                    name="mission"
                    placeholder="Enter school's mission statement"
                    register={register}
                    errors={errors}
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Facilities & Features */}
          <div className="shadow-sm border rounded-lg overflow-hidden mt-6">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span>Facilities & Features</span>
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextInput
                    label="Number of Classrooms"
                    name="numberOfClassrooms"
                    placeholder="Enter number of classrooms"
                    register={register}
                    errors={errors}
                  />
                  <TextInput
                    label="Number of Teachers"
                    name="numberOfTeachers"
                    placeholder="Enter number of Teachers"
                    register={register}
                    errors={errors}
                  />
                  <TextInput
                    label="Number of Students"
                    name="numberOfStudents"
                    placeholder="Enter number of Students"
                    register={register}
                    errors={errors}
                  />
                </div>
                <Label className="block text-sm font-medium text-secondary-foreground">
                  Facilities
                </Label>

                <div className="border bg-muted/30 rounded-md p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CheckboxInput
                      label="Library"
                      name="hasLibrary"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Computer Lab"
                      name="hasComputerLab"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Science Lab"
                      name="hasScienceLab"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Sports Facilities"
                      name="hasSportsFacilities"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Cafeteria"
                      name="hasCafeteria"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Transportation"
                      name="hasTransportation"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Medical Room"
                      name="hasMedicalRoom"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Auditorium"
                      name="hasAuditorium"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Smart Classrooms"
                      name="hasSmartClassrooms"
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <TextArea
                  label="Additional Facilities"
                  name="additionalFacilities"
                  placeholder="Describe any additional facilities or features"
                  register={register}
                  errors={errors}
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Media & Documents */}
          <div className="shadow-sm border rounded-lg overflow-hidden mt-6">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <ImagePlus className="w-5 h-5 text-primary" />
                <span>Media & Documents</span>
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ImageInput
                  title="School Logo"
                  imageUrl={logoUrl}
                  setImageUrl={setLogoUrl}
                  endpoint="schoolLogo"
                  className="object-contain w-full max-w-xs mt-2"
                />
                <FileInput
                  name="registrationDocument"
                  label="Registration Document"
                  description="Upload school registration certificate"
                  register={register}
                  errors={errors}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </div>
          </div>

          {/* Subscription Information  */}
          <div className="shadow-sm border rounded-lg overflow-hidden mt-6">
            <div className="p-6 border-b bg-muted rounded-none">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                <span>Subscription Information</span>
              </h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ComboboxInput
                    label="Subscription Plan"
                    name="subscriptionPlan"
                    placeholder="Select subscription plan"
                    options={subscriptionPlans}
                    register={register}
                    errors={errors}
                    required
                  />
                  <DateInput
                    label="Start Date"
                    name="subscriptionStartDate"
                    placeholder="mm/dd/yyyy"
                    register={register}
                    errors={errors}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ComboboxInput
                    label="Duration"
                    name="subscriptionDuration"
                    placeholder="Select duration"
                    options={durations}
                    register={register}
                    errors={errors}
                    required
                  />
                  <ComboboxInput
                    label="Payment Method"
                    name="paymentMethod"
                    placeholder="Select payment method"
                    options={paymentMethods}
                    register={register}
                    errors={errors}
                  />
                </div>

                <Label className="block text-sm font-medium text-secondary-foreground">
                  Plan Features
                </Label>

                <div className="border bg-muted/30 rounded-md p-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CheckboxInput
                      label="Student Management"
                      name="hasStudentManagement"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Staff Management"
                      name="hasStaffManagement"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Attendance Tracking"
                      name="hasAttendanceTracking"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Fee Management"
                      name="hasFeeManagement"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Exam Management"
                      name="hasExamManagement"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Library Management"
                      name="hasLibraryManagement"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Transport Management"
                      name="hasTransportManagement"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Hostel Management"
                      name="hasHostelManagement"
                      register={register}
                      errors={errors}
                    />
                    <CheckboxInput
                      label="Advanced Reports"
                      name="hasAdvancedReports"
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormFooter
        href="/dashboard/schools"
        parent="Schools"
        title="School"
        editingId={editingId}
        loading={isLoading}
      />
    </form>
  );
}
