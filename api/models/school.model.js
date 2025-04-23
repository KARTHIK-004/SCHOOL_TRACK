import mongoose from "mongoose";

const SchoolSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["public", "private", "international", "charter", "religious"],
      required: true,
    },
    board: {
      type: String,
      enum: ["cbse", "icse", "state", "ib", "cambridge", "american", "other"],
      required: true,
    },
    registrationNumber: {
      type: String,
      required: true,
      unique: true,
    },
    establishedDate: {
      type: Date,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    description: {
      type: String,
    },
    // Address Information
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
    },
    // Administrative Information
    principalName: {
      type: String,
      required: true,
    },
    principalEmail: {
      type: String,
      required: true,
    },
    principalPhone: {
      type: String,
      required: true,
    },
    taxId: {
      type: String,
    },
    affiliationNumber: {
      type: String,
    },
    affiliationBoard: {
      type: String,
      enum: ["cbse", "icse", "state", "ib", "cambridge", "american", "other"],
    },
    vision: {
      type: String,
    },
    mission: {
      type: String,
    },
    // Facilities & Features
    numberOfClassrooms: {
      type: Number,
    },
    numberOfTeachers: {
      type: Number,
    },
    numberOfStudents: {
      type: Number,
    },
    hasLibrary: {
      type: Boolean,
      default: false,
    },
    hasComputerLab: {
      type: Boolean,
      default: false,
    },
    hasScienceLab: {
      type: Boolean,
      default: false,
    },
    hasSportsFacilities: {
      type: Boolean,
      default: false,
    },
    hasCafeteria: {
      type: Boolean,
      default: false,
    },
    hasTransportation: {
      type: Boolean,
      default: false,
    },
    hasMedicalRoom: {
      type: Boolean,
      default: false,
    },
    hasAuditorium: {
      type: Boolean,
      default: false,
    },
    hasSmartClassrooms: {
      type: Boolean,
      default: false,
    },
    additionalFacilities: {
      type: String,
    },
    // Media & Documents
    logoUrl: {
      type: String,
      default: "",
    },
    registrationDocument: {
      type: String,
    },
    // Subscription Information
    subscriptionPlan: {
      type: String,
      enum: ["basic", "standard", "premium", "enterprise"],
    },
    subscriptionStartDate: {
      type: Date,
    },
    subscriptionDuration: {
      type: String,
      enum: ["1 month", "3 months", "6 months", "1 year", "2 years"],
    },
    paymentMethod: {
      type: String,
      enum: ["creditCard", "debitCard", "netBanking", "upi", "payPal"],
    },
    // Plan Features
    hasStudentManagement: {
      type: Boolean,
      default: false,
    },
    hasStaffManagement: {
      type: Boolean,
      default: false,
    },
    hasAttendanceTracking: {
      type: Boolean,
      default: false,
    },
    hasFeeManagement: {
      type: Boolean,
      default: false,
    },
    hasExamManagement: {
      type: Boolean,
      default: false,
    },
    hasLibraryManagement: {
      type: Boolean,
      default: false,
    },
    hasTransportManagement: {
      type: Boolean,
      default: false,
    },
    hasHostelManagement: {
      type: Boolean,
      default: false,
    },
    hasAdvancedReports: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("School", SchoolSchema);
