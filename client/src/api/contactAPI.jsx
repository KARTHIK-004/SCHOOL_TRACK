import axiosInstance from "./axiosInstance";

// Contact Form API
export const submitContactForm = async (formData) => {
  try {
    const response = await axiosInstance.post("/contacts/create", formData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to submit contact form"
    );
  }
};

// Get All Contacts API (for admin)
export const getContacts = async () => {
  try {
    const response = await axiosInstance.get("/contacts");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch contacts"
    );
  }
};

// Delete Contact API (for admin)
export const deleteContact = async (contactId) => {
  try {
    const response = await axiosInstance.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to delete contact"
    );
  }
};
