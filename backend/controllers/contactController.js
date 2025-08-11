import Contact from "../models/Contact.js";

// CREATE - Add a new contact
export const createContact = async (req, res) => {
  try {
    const { fullName, subject, email, phoneNumber, message } = req.body;

    if (!fullName || !subject || !email || !message) {
      return res.status(400).json({ error: "Please fill all required fields" });
    }

    const newContact = new Contact({ fullName, subject, email, phoneNumber, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully", data: newContact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ - Get all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ - Get contact by ID
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE - Update contact by ID
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json({ message: "Contact updated successfully", data: contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE - Delete contact by ID
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
