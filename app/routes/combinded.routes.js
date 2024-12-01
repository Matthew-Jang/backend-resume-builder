// const { authenticate } = require("../authorization/authorization.js");
// const express = require('express');
// const router = express.Router();

// // Import controller functions
// const {
//   getAllUsers,
//   createUser,
//   getUser,
//   updateUser,
//   deleteUser,
//   getAllContactInfos,
//   createContactInfo,
//   getContactInfo,
//   updateContactInfo,
//   deleteContactInfo,
//   getAllProfessionalInfos,
//   createProfessionalInfo,
//   getProfessionalInfo,
//   updateProfessionalInfo,
//   deleteProfessionalInfo,
//   getAllExperiences,
//   createExperience,
//   getExperience,
//   updateExperience,
//   deleteExperience,
//   getAllSkills,
//   createSkill,
//   getSkill,
//   updateSkill,
//   deleteSkill,
//   getAllEducations,
//   createEducation,
//   getEducation,
//   updateEducation,
//   deleteEducation,
//   getAllCertifications,
//   createCertification,
//   getCertification,
//   updateCertification,
//   deleteCertification,
//   getAllProjects,
//   createProject,
//   getProject,
//   updateProject,
//   deleteProject,
//   getAllReferences,
//   createReference,
//   getReference,
//   updateReference,
//   deleteReference,
//   getAllResumes,
//   createResume,
//   getResume,
//   updateResume,
//   deleteResume
// } = require('./controller');

// // USER ROUTES
// router.get('/users', getAllUsers);         // Get all users
// router.post('/users', createUser);         // Create a new user
// router.get('/users/:id', getUser);         // Get a single user by ID
// router.put('/users/:id', updateUser);     // Update a user by ID
// router.delete('/users/:id', deleteUser);  // Delete a user by ID

// // CONTACT INFO ROUTES
// router.get('/contact-info', getAllContactInfos);         // Get all contact infos
// router.post('/contact-info', createContactInfo);         // Create a new contact info
// router.get('/contact-info/:id', getContactInfo);         // Get a single contact info by ID
// router.put('/contact-info/:id', updateContactInfo);     // Update a contact info by ID
// router.delete('/contact-info/:id', deleteContactInfo);  // Delete a contact info by ID

// // PROFESSIONAL INFO ROUTES
// router.get('/professional-info', getAllProfessionalInfos);         // Get all professional infos
// router.post('/professional-info', createProfessionalInfo);         // Create a new professional info
// router.get('/professional-info/:id', getProfessionalInfo);         // Get a single professional info by ID
// router.put('/professional-info/:id', updateProfessionalInfo);     // Update a professional info by ID
// router.delete('/professional-info/:id', deleteProfessionalInfo);  // Delete a professional info by ID

// // EXPERIENCE ROUTES
// router.get('/experience',authenticate, getAllExperiences);         // Get all experiences
// router.post('/experience', authenticate, createExperience);         // Create a new experience
// router.get('/experience/:id', authenticate, getExperience);         // Get a single experience by ID
// router.put('/experience/:id', authenticate, updateExperience);     // Update an experience by ID
// router.delete('/experience/:id', authenticate, deleteExperience);  // Delete an experience by ID

// // SKILLS ROUTES
// router.get('/skills', getAllSkills);         // Get all skills
// router.post('/skills', createSkill);         // Create a new skill
// router.get('/skills/:id', getSkill);         // Get a single skill by ID
// router.put('/skills/:id', updateSkill);     // Update a skill by ID
// router.delete('/skills/:id', deleteSkill);  // Delete a skill by ID

// // EDUCATION ROUTES
// router.get('/education', getAllEducations);         // Get all educations
// router.post('/education', createEducation);         // Create a new education
// router.get('/education/:id', getEducation);         // Get a single education by ID
// router.put('/education/:id', updateEducation);     // Update an education by ID
// router.delete('/education/:id', deleteEducation);  // Delete an education by ID

// // CERTIFICATIONS ROUTES
// router.get('/certifications', getAllCertifications);         // Get all certifications
// router.post('/certifications', createCertification);         // Create a new certification
// router.get('/certifications/:id', getCertification);         // Get a single certification by ID
// router.put('/certifications/:id', updateCertification);     // Update a certification by ID
// router.delete('/certifications/:id', deleteCertification);  // Delete a certification by ID

// // PROJECTS ROUTES
// router.get('/projects', getAllProjects);         // Get all projects
// router.post('/projects', createProject);         // Create a new project
// router.get('/projects/:id', getProject);         // Get a single project by ID
// router.put('/projects/:id', updateProject);     // Update a project by ID
// router.delete('/projects/:id', deleteProject);  // Delete a project by ID

// // REFERENCES ROUTES
// router.get('/references', getAllReferences);         // Get all references
// router.post('/references', createReference);         // Create a new reference
// router.get('/references/:id', getReference);         // Get a single reference by ID
// router.put('/references/:id', updateReference);     // Update a reference by ID
// router.delete('/references/:id', deleteReference);  // Delete a reference by ID

// // RESUME ROUTES
// router.get('/resumes', getAllResumes);         // Get all resumes
// router.post('/resumes', createResume);         // Create a new resume
// router.get('/resumes/:id', getResume);         // Get a single resume by ID
// router.put('/resumes/:id', updateResume);     // Update a resume by ID
// router.delete('/resumes/:id', deleteResume);  // Delete a resume by ID

// // EXPORT ROUTES
// module.exports = router;
