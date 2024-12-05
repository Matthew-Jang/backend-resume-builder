module.exports = (app) => {
    const resumes = require("../controllers/resume.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    const router = require("express").Router();

    // Fetch all resumes for a specific user
    router.get("/users/:userId", [authenticate], resumes.getResumesByUser);

    // Other existing routes for resumes
    router.post("users/:userId", [authenticate], resumes.createResume);
    router.get("/", [authenticate], resumes.getAllResumes);
    router.get("/:id", [authenticate], resumes.getResumeById);
    router.put("/:id", [authenticate], resumes.updateResume);
    router.delete("/:id", [authenticate], resumes.deleteResume);

    // Bridge table operations
    router.post("/:resumeId/experiences", [authenticate], resumes.addExperience);
    router.delete("/:resumeId/experiences/:experienceId", [authenticate], resumes.removeExperience);

    router.post("/:resumeId/educations", [authenticate], resumes.addEducation);
    router.delete("/:resumeId/educations/:educationId", [authenticate], resumes.removeEducation);

    router.post("/:resumeId/certifications", [authenticate], resumes.addCertification);
    router.delete("/:resumeId/certifications/:certificationId", [authenticate], resumes.removeCertification);

    router.post("/:resumeId/professional_infos", [authenticate], resumes.addProfessionalInfo);
    router.delete("/:resumeId/professional_infos/:professionalInfoId", [authenticate], resumes.removeProfessionalInfo);

    router.post("/:resumeId/projects", [authenticate], resumes.addProject);
    router.delete("/:resumeId/projects/:projectId", [authenticate], resumes.removeProject);

    router.post("/:resumeId/skills", [authenticate], resumes.addSkill);
    router.delete("/:resumeId/skills/:skillId", [authenticate], resumes.removeSkill);

    router.post("/:resumeId/contact_infos", [authenticate], resumes.addContactInfo);
    router.delete("/:resumeId/contact_infos/:contactInfoId", [authenticate], resumes.removeContactInfo);

    app.use("/resume-t4/api/resumes", router);
};
