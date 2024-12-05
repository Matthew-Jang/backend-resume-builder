const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Initialize Sequelize with DB Config
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Test Database Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Initialize DB Object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import Models
db.user = require("./user.model.js")(sequelize, Sequelize);
db.session = require("./session.model.js")(sequelize, Sequelize);
db.experience = require("./experience.model.js")(sequelize, Sequelize);
db.certification = require("./certification.model.js")(sequelize, Sequelize);
db.contact_info = require("./contact-info.model.js")(sequelize, Sequelize);
db.professional_info = require("./professional_info.model.js")(sequelize, Sequelize);
db.project = require("./project.model.js")(sequelize, Sequelize);
db.education = require("./education.model.js")(sequelize, Sequelize);
db.skill = require("./skill.model.js")(sequelize, Sequelize);
db.reference = require("./reference.model.js")(sequelize, Sequelize);
db.resume = require("./resume.model.js")(sequelize, Sequelize);

// User Relationships
db.user.hasMany(db.session, { as: "sessions", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.session.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

db.user.hasMany(db.experience, { as: "experiences", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.experience.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

db.user.hasMany(db.certification, { as: "certifications", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.certification.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

db.user.hasMany(db.contact_info, { as: "contactInfos", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.contact_info.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

db.user.hasMany(db.contact_info, { as: "professionalInfos", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.professional_info.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

db.user.hasMany(db.project, { as: "projects", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.project.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

db.user.hasMany(db.education, { as: "educations", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.education.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

db.user.hasMany(db.skill, { as: "skills", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.skill.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

db.user.hasMany(db.reference, { as: "references", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.reference.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

db.user.hasMany(db.resume, { as: "resumes", foreignKey: { allowNull: false }, onDelete: "CASCADE" });
db.resume.belongsTo(db.user, { as: "user", foreignKey: { allowNull: false }, onDelete: "CASCADE" });

// Resume Relationships
db.resume.belongsToMany(db.experience, {
  through: "Resume_Experience",
  as: "experiences",
  foreignKey: "resumeId",
  otherKey: "experienceId",
  onDelete: "CASCADE",
});

db.resume.belongsToMany(db.certification, {
  through: "Resume_Certification",
  as: "certifications",
  foreignKey: "resumeId",
  otherKey: "certificationId",
  onDelete: "CASCADE",
});

db.resume.belongsToMany(db.contact_info, {
  through: "Resume_ContactInfo",
  as: "contactInfos",
  foreignKey: "resumeId",
  otherKey: "contactInfoId",
  onDelete: "CASCADE",
});

db.resume.belongsToMany(db.professional_info, {
  through: "Resume_ProfessionalInfo",
  as: "professionalInfos",
  foreignKey: "resumeId",
  otherKey: "professionalInfoId",
  onDelete: "CASCADE",
});

db.resume.belongsToMany(db.project, {
  through: "Resume_Project",
  as: "projects",
  foreignKey: "resumeId",
  otherKey: "projectId",
  onDelete: "CASCADE",
});

db.resume.belongsToMany(db.education, {
  through: "Resume_Education",
  as: "educations",
  foreignKey: "resumeId",
  otherKey: "educationId",
  onDelete: "CASCADE",
});

db.resume.belongsToMany(db.skill, {
  through: "Resume_Skill",
  as: "skills",
  foreignKey: "resumeId",
  otherKey: "skillId",
  onDelete: "CASCADE",
});

db.resume.belongsToMany(db.reference, {
  through: "Resume_Reference",
  as: "references",
  foreignKey: "resumeId",
  otherKey: "referenceId",
  onDelete: "CASCADE",
});

module.exports = db;
