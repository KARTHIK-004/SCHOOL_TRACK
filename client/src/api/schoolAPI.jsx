import axiosInstance from "./axiosInstance";

// Create School
export const createSchool = async (schoolData) => {
  try {
    const response = await axiosInstance.post("/schools/create", schoolData);
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.error ||
      error.response?.data?.message ||
      "Failed to create school";
    throw new Error(message);
  }
};

// Get All Schools
export const getSchools = async () => {
  try {
    const response = await axiosInstance.get("/schools");
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch schools");
  }
};

// Update School
export const updateSchool = async (schoolId, updatedData) => {
  try {
    const response = await axiosInstance.put(
      `/schools/${schoolId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update school");
  }
};

// Get Single School
export const getSchoolById = async (schoolId) => {
  try {
    const response = await axiosInstance.get(`/schools/${schoolId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch school details"
    );
  }
};

// Delete School
export const deleteSchool = async (schoolId) => {
  try {
    const response = await axiosInstance.delete(`/schools/${schoolId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete school");
  }
};
