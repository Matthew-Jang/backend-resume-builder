const db = require("../models");

exports.createResume = async (req, res) => {
    try {
        const { title, description } = req.body;
        const resume = await db.resume.create({ title, description });
        res.status(201).send(resume);
    } catch (error) {
        console.error("Error creating resume:", error);
        res.status(500).send({ message: "Failed to create resume" });
    }
};

exports.getResumesByUser = async (req, res) => {
    try {
        const { userId } = req.params;

        // Fetch all resumes for the user
        const resumes = await db.resume.findAll({
            where: { userId },
            include: [
                { model: db.experience, as: "experiences" },
                { model: db.education, as: "educations" },
                { model: db.certification, as: "certifications" },
                { model: db.professional_info, as: "professional_infos" },
                { model: db.project, as: "projects" },
                { model: db.skill, as: "skills" },
                { model: db.contact_info, as: "contact_infos" },
            ],
        });

        if (!resumes || resumes.length === 0) {
            return res.status(404).send({ message: "No resumes found for the user" });
        }

        res.send(resumes);
    } catch (error) {
        console.error("Error fetching resumes by user:", error);
        res.status(500).send({ message: "Failed to fetch resumes by user" });
    }
};


exports.getAllResumes = async (req, res) => {
    try {
        const resumes = await db.resume.findAll();
        res.send(resumes);
    } catch (error) {
        console.error("Error fetching resumes:", error);
        res.status(500).send({ message: "Failed to fetch resumes" });
    }
};

exports.getResumeById = async (req, res) => {
    try {
        const { id } = req.params;
        const resume = await db.resume.findByPk(id, {
            include: [
                { model: db.experience, as: "experiences" },
                { model: db.education, as: "educations" },
                { model: db.certification, as: "certifications" },
                { model: db.professional_info, as: "professional_infos" },
                { model: db.project, as: "projects" },
                { model: db.skill, as: "skills" },
                { model: db.contact_info, as: "contact_infos" },
            ],
        });
        if (!resume) {
            return res.status(404).send({ message: "Resume not found" });
        }
        res.send(resume);
    } catch (error) {
        console.error("Error fetching resume by ID:", error);
        res.status(500).send({ message: "Failed to fetch resume" });
    }
};

exports.updateResume = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const [updated] = await db.resume.update({ title, description }, { where: { id } });

        if (!updated) {
            return res.status(404).send({ message: "Resume not found" });
        }

        res.send({ message: "Resume updated successfully" });
    } catch (error) {
        console.error("Error updating resume:", error);
        res.status(500).send({ message: "Failed to update resume" });
    }
};

exports.deleteResume = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await db.resume.destroy({ where: { id } });

        if (!deleted) {
            return res.status(404).send({ message: "Resume not found" });
        }

        res.send({ message: "Resume deleted successfully" });
    } catch (error) {
        console.error("Error deleting resume:", error);
        res.status(500).send({ message: "Failed to delete resume" });
    }
};

// Bridge Table Operations
const addAssociation = async (req, res, category) => {
    try {
        const { resumeId } = req.params;
        const { categoryId } = req.body;
        const resume = await db.resume.findByPk(resumeId);
        const categoryItem = await db[category].findByPk(categoryId);

        if (!resume || !categoryItem) {
            return res.status(404).send({ message: `${category} or Resume not found` });
        }

        await resume[`add${categoryItem.constructor.name}`](categoryItem);
        res.send({ message: `${categoryItem.constructor.name} added to resume successfully!` });
    } catch (error) {
        console.error(`Error adding ${category} to resume:`, error);
        res.status(500).send({ message: `Failed to add ${category} to resume` });
    }
};

const removeAssociation = async (req, res, category) => {
    try {
        const { resumeId, categoryId } = req.params;
        const resume = await db.resume.findByPk(resumeId);
        const categoryItem = await db[category].findByPk(categoryId);

        if (!resume || !categoryItem) {
            return res.status(404).send({ message: `${category} or Resume not found` });
        }

        await resume[`remove${categoryItem.constructor.name}`](categoryItem);
        res.send({ message: `${categoryItem.constructor.name} removed from resume successfully!` });
    } catch (error) {
        console.error(`Error removing ${category} from resume:`, error);
        res.status(500).send({ message: `Failed to remove ${category} from resume` });
    }
};

// CRUD for Each Bridge Table Category
exports.addExperience = async (req, res) => addAssociation(req, res, "experience");
exports.removeExperience = async (req, res) => removeAssociation(req, res, "experience");

exports.addEducation = async (req, res) => addAssociation(req, res, "education");
exports.removeEducation = async (req, res) => removeAssociation(req, res, "education");

exports.addCertification = async (req, res) => addAssociation(req, res, "certification");
exports.removeCertification = async (req, res) => removeAssociation(req, res, "certification");

exports.addProfessionalInfo = async (req, res) => addAssociation(req, res, "professional_info");
exports.removeProfessionalInfo = async (req, res) => removeAssociation(req, res, "professional_info");

exports.addProject = async (req, res) => addAssociation(req, res, "project");
exports.removeProject = async (req, res) => removeAssociation(req, res, "project");

exports.addSkill = async (req, res) => addAssociation(req, res, "skill");
exports.removeSkill = async (req, res) => removeAssociation(req, res, "skill");

exports.addContactInfo = async (req, res) => addAssociation(req, res, "contact_info");
exports.removeContactInfo = async (req, res) => removeAssociation(req, res, "contact_info");
