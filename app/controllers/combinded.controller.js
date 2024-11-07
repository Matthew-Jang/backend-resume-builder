const { User, ContactInfo, ProfessionalInfo, Experience, Skills, Education, Certifications, Projects, References, Resume } = require('./models');

// Utility function for handling errors
const handleError = (res, err) => res.status(500).json({ message: err.message });

// USER CONTROLLER
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    handleError(res, err);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    handleError(res, err);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) res.json(user);
    else res.status(404).json({ message: "User not found" });
  } catch (err) {
    handleError(res, err);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.update(req.body, { where: { user_id: req.params.id }, returning: true });
    if (user[0]) res.json(user[1][0]);
    else res.status(404).json({ message: "User not found" });
  } catch (err) {
    handleError(res, err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const rowsDeleted = await User.destroy({ where: { user_id: req.params.id } });
    if (rowsDeleted) res.status(204).send();
    else res.status(404).json({ message: "User not found" });
  } catch (err) {
    handleError(res, err);
  }
};

// CONTACT INFO CONTROLLER
const getAllContactInfos = async (req, res) => {
  try {
    const contactInfos = await ContactInfo.findAll();
    res.json(contactInfos);
  } catch (err) {
    handleError(res, err);
  }
};

const createContactInfo = async (req, res) => {
  try {
    const contactInfo = await ContactInfo.create(req.body);
    res.json(contactInfo);
  } catch (err) {
    handleError(res, err);
  }
};

const getContactInfo = async (req, res) => {
  try {
    const contactInfo = await ContactInfo.findByPk(req.params.id);
    if (contactInfo) res.json(contactInfo);
    else res.status(404).json({ message: "Contact Info not found" });
  } catch (err) {
    handleError(res, err);
  }
};

const updateContactInfo = async (req, res) => {
  try {
    const contactInfo = await ContactInfo.update(req.body, { where: { contact_id: req.params.id }, returning: true });
    if (contactInfo[0]) res.json(contactInfo[1][0]);
    else res.status(404).json({ message: "Contact Info not found" });
  } catch (err) {
    handleError(res, err);
  }
};

const deleteContactInfo = async (req, res) => {
  try {
    const rowsDeleted = await ContactInfo.destroy({ where: { contact_id: req.params.id } });
    if (rowsDeleted) res.status(204).send();
    else res.status(404).json({ message: "Contact Info not found" });
  } catch (err) {
    handleError(res, err);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getAllContactInfos,
  createContactInfo,
  getContactInfo,
  updateContactInfo,
  deleteContactInfo,
};
