import { createContext, useContext, useState } from "react";
import { getContacts, submitContactForm } from "@/api/contactAPI";

const ContactContext = createContext({
  isLoading: false,
  error: null,
  submitContact: () => {},
});

export const ContactProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contacts, setContacts] = useState([]);

  const submitContact = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await submitContactForm(formData);
      return response;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const response = await getContacts();
      setContacts(response.data || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Error fetching contacts", {
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        isLoading,
        error,
        submitContact,
        contacts,
        fetchContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
