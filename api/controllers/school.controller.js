import School from "../models/school.model.js";

// Create a new school
export const createSchool = async (req, res) => {
  try {
    // Validate required fields
    const requiredFields = [
      "name",
      "type",
      "board",
      "registrationNumber",
      "establishedDate",
      "email",
      "phone",
      "website",
      "description",
      "address",
      "city",
      "state",
      "country",
      "postalCode",
      "principalName",
      "principalEmail",
      "principalPhone",
      "schoolRegistrationNumber",
      "taxId",
      "affiliationNumber",
      "affiliationBoard",
      "vision",
      "mission",
      "numberOfClassrooms",
      "numberOfTeachers",
      "numberOfStudents",
      "additionalFacilities",
      "subscriptionPlan",
      "subscriptionStartDate",
      "subscriptionDuration",
      "paymentMethod",
    ];

    const missingFields = requiredFields.filter((field) => !req.body[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Check if school with same registration number already exists
    const existingSchool = await School.findOne({
      registrationNumber: req.body.registrationNumber,
    });

    if (existingSchool) {
      return res.status(400).json({
        success: false,
        message: "School with this registration number already exists",
      });
    }

    // Create new school
    const newSchool = new School(req.body);
    const savedSchool = await newSchool.save();

    res.status(201).json({
      success: true,
      data: savedSchool,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all schools
export const getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json({
      success: true,
      count: schools.length,
      data: schools,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get school by ID
export const getSchoolById = async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) {
      return res.status(404).json({
        success: false,
        message: "School not found",
      });
    }
    res.status(200).json({
      success: true,
      data: school,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update school
export const updateSchool = async (req, res) => {
  try {
    // Check if updating registration number and if it already exists
    if (req.body.registrationNumber) {
      const existingSchool = await School.findOne({
        registrationNumber: req.body.registrationNumber,
        _id: { $ne: req.params.id },
      });

      if (existingSchool) {
        return res.status(400).json({
          success: false,
          message: "School with this registration number already exists",
        });
      }
    }

    const updatedSchool = await School.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedSchool) {
      return res.status(404).json({
        success: false,
        message: "School not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedSchool,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete school
export const deleteSchool = async (req, res, next) => {
  try {
    const deletedSchool = await School.findByIdAndDelete(req.params.id);

    if (!deletedSchool) {
      return res.status(404).json({
        success: false,
        message: "School not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "School deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
