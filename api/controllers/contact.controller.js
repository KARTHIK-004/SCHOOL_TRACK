import Contact from "../models/contact.model.js";

export const submitContact = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      school,
      country,
      website,
      students,
      role,
      mediaSource,
      points,
    } = req.body;

    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({
        status: "error",
        message:
          "This email has already been submitted. Please use a different email address.",
      });
    }

    const newContact = new Contact({
      name,
      email,
      phone,
      school,
      country,
      website,
      students,
      role,
      mediaSource,
      points,
    });

    const savedContact = await newContact.save();
    res.status(201).json({
      status: "success",
      data: {
        contact: savedContact,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
      error: error.message,
    });
  }
};

export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }
    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact",
      error: error.message,
    });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete contact",
      error: error.message,
    });
  }
};
