import { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import {
  getSchools,
  getSchoolById,
  createSchool,
  updateSchool,
  deleteSchool,
} from "@/api/schoolAPI";

const SchoolContext = createContext({
  isLoading: false,
  error: null,
  schools: [],
  currentSchool: null,
  fetchSchools: () => {},
  fetchSchoolById: () => {},
  addSchool: () => {},
  editSchool: () => {},
  removeSchool: () => {},
});

export const SchoolProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [schools, setSchools] = useState([]);
  const [currentSchool, setCurrentSchool] = useState(null);

  const fetchSchools = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getSchools();
      setSchools(response.data || []);
      return response;
    } catch (error) {
      setError(error.message);
      toast.error("Error fetching schools");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSchoolById = async (schoolId) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getSchoolById(schoolId);
      setCurrentSchool(response.data);
      return response;
    } catch (error) {
      setError(error.message);
      toast.error("Error fetching school details");
    } finally {
      setIsLoading(false);
    }
  };

  const addSchool = async (schoolData) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await createSchool(schoolData);
      toast.success("School created successfully!");
      return response;
    } catch (error) {
      setError(error.message);
      toast.error("Error while creating school, Please try again later.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const editSchool = async (schoolId, updatedData) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await updateSchool(schoolId, updatedData);
      toast.success("School updated successfully!");
      return response;
    } catch (error) {
      setError(error.message);
      toast.error("Error updating school, Please try again later.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const removeSchool = async (schoolId) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await deleteSchool(schoolId);
      setSchools((prevSchools) =>
        prevSchools.filter((school) => school._id !== schoolId)
      );
      if (currentSchool && currentSchool._id === schoolId) {
        setCurrentSchool(null);
      }
      toast.success("School deleted successfully!");
      return response;
    } catch (error) {
      setError(error.message);
      toast.error("Error deleting school", {
        description: error.message || "Please try again later.",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SchoolContext.Provider
      value={{
        isLoading,
        error,
        schools,
        currentSchool,
        fetchSchools,
        fetchSchoolById,
        addSchool,
        editSchool,
        removeSchool,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => useContext(SchoolContext);
