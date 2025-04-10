import { createContext, useContext, useState } from "react";
import { submitContactForm } from "@/api/contactAPI";

const ContactContext = createContext({
  isLoading: false,
  error: null,
  submitContact: () => {},
});

export const ContactProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <ContactContext.Provider
      value={{
        isLoading,
        error,
        submitContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
