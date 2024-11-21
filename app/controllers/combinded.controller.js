// controllers/index.js
const { ContactInfo, ProfessionalInfo, Experience, Skill, Education, Certification, Project, Reference, Resume } = require('../models');
  
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
  
  // PROFESSIONAL INFO CONTROLLER
  const getAllProfessionalInfos = async (req, res) => {
    try {
      const professionalInfos = await ProfessionalInfo.findAll();
      res.json(professionalInfos);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const createProfessionalInfo = async (req, res) => {
    try {
      const professionalInfo = await ProfessionalInfo.create(req.body);
      res.json(professionalInfo);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const getProfessionalInfo = async (req, res) => {
    try {
      const professionalInfo = await ProfessionalInfo.findByPk(req.params.id);
      if (professionalInfo) res.json(professionalInfo);
      else res.status(404).json({ message: "Professional Info not found" });
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const updateProfessionalInfo = async (req, res) => {
    try {
      const professionalInfo = await ProfessionalInfo.update(req.body, { where: { professional_id: req.params.id }, returning: true });
      if (professionalInfo[0]) res.json(professionalInfo[1][0]);
      else res.status(404).json({ message: "Professional Info not found" });
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const deleteProfessionalInfo = async (req, res) => {
    try {
      const rowsDeleted = await ProfessionalInfo.destroy({ where: { professional_id: req.params.id } });
      if (rowsDeleted) res.status(204).send();
      else res.status(404).json({ message: "Professional Info not found" });
    } catch (err) {
      handleError(res, err);
    }
  };
  
  // EXPERIENCE CONTROLLER
  const getAllExperiences = async (req, res) => {
    try {
      const experiences = await Experience.findAll();
      res.json(experiences);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const createExperience = async (req, res) => {
    try {
      const experience = await Experience.create(req.body);
      res.json(experience);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const getExperience = async (req, res) => {
    try {
      const experience = await Experience.findByPk(req.params.id);
      if (experience) res.json(experience);
      else res.status(404).json({ message: "Experience not found" });
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const updateExperience = async (req, res) => {
    try {
      const experience = await Experience.update(req.body, { where: { experience_id: req.params.id }, returning: true });
      if (experience[0]) res.json(experience[1][0]);
      else res.status(404).json({ message: "Experience not found" });
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const deleteExperience = async (req, res) => {
    try {
      const rowsDeleted = await Experience.destroy({ where: { experience_id: req.params.id } });
      if (rowsDeleted) res.status(204).send();
      else res.status(404).json({ message: "Experience not found" });
    } catch (err) {
      handleError(res, err);
    }
  };
  
  // SKILLS CONTROLLER
  const getAllSkills = async (req, res) => {
    try {
      const skills = await Skill.findAll();
      res.json(skills);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const createSkill = async (req, res) => {
    try {
      const skill = await Skill.create(req.body);
      res.json(skill);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const getSkill = async (req, res) => {
    try {
      const skill = await Skill.findByPk(req.params.id);
      if (skill) res.json(skill);
      else res.status(404).json({ message: "Skill not found" });
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const updateSkill = async (req, res) => {
    try {
      const skill = await Skill.update(req.body, { where: { skill_id: req.params.id }, returning: true });
      if (skill[0]) res.json(skill[1][0]);
      else res.status(404).json({ message: "Skill not found" });
    } catch (err) {
      handleError(res, err);
    }
  };
  
  const deleteSkill = async (req, res) => {
    try {
      const rowsDeleted = await Skill.destroy({ where: { skill_id: req.params.id } });
      if (rowsDeleted) res.status(204).send();
      else res.status(404).json({ message: "Skill not found" });
    } catch (err) {
      handleError(res, err);
    }
  };
  
  // Repeat similar pattern for Education, Certification, Project, Reference, and Resume controllers...
  // Education Controller
  const getAllEducations = async (req, res) => {
    try {
      const educations = await Education.findAll();
      res.json(educations);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  // Certification Controller
  const getAllCertifications = async (req, res) => {
    try {
      const certifications = await Certification.findAll();
      res.json(certifications);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  // Project Controller
  const getAllProjects = async (req, res) => {
    try {
      const projects = await Project.findAll();
      res.json(projects);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  // Reference Controller
  const getAllReferences = async (req, res) => {
    try {
      const references = await Reference.findAll();
      res.json(references);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  // Resume Controller
  const getAllResumes = async (req, res) => {
    try {
      const resumes = await Resume.findAll();
      res.json(resumes);
    } catch (err) {
      handleError(res, err);
    }
  };
  
  module.exports = {
    getAllUsers, createUser, getUser, updateUser, deleteUser,
    getAllContactInfos, createContactInfo, getContactInfo, updateContactInfo, deleteContactInfo,
    getAllProfessionalInfos, createProfessionalInfo, getProfessionalInfo, updateProfessionalInfo, deleteProfessionalInfo,
    getAllExperiences, createExperience, getExperience, updateExperience, deleteExperience,
    getAllSkills, createSkill, getSkill, updateSkill, deleteSkill,
    getAllEducations, getAllCertifications, getAllProjects, getAllReferences, getAllResumes
  };
  