// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db.config'); // Adjust path as needed

// // User Model
// // const User = sequelize.define('User', {
// //   user_id: {
// //     type: DataTypes.INTEGER,
// //     autoIncrement: true,
// //     primaryKey: true
// //   },
// //   name: {
// //     type: DataTypes.STRING(100),
// //     allowNull: false
// //   },
// //   email: {
// //     type: DataTypes.STRING(100),
// //     allowNull: false,
// //     unique: true
// //   }
// // }, { timestamps: false });

// // Contact Info Model
// const ContactInfo = sequelize.define('Contact_Info', {
//   contact_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'user_id'
//     }
//   },
//   full_name: DataTypes.STRING(100),
//   email: DataTypes.STRING(100),
//   phone_number: DataTypes.STRING(20),
//   address: DataTypes.STRING(255)
// }, { timestamps: false });

// // Professional Info Model
// const ProfessionalInfo = sequelize.define('professional_info', {
//   professional_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'user_id'
//     }
//   },
//   github_link: DataTypes.STRING(255),
//   linkedin_link: DataTypes.STRING(255)
// }, { timestamps: false });

// // Experience Model
// const Experience = sequelize.define('Experience', {
//   experience_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'user_id'
//     }
//   },
//   title: DataTypes.STRING(100),
//   employer: DataTypes.STRING(100),
//   start_date: DataTypes.DATE,
//   end_date: DataTypes.DATE,
//   description: DataTypes.TEXT
// }, { timestamps: false });

// // Skills Model
// const Skills = sequelize.define('Skills', {
//   skill_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'user_id'
//     }
//   },
//   skill_name: DataTypes.STRING(100)
// }, { timestamps: false });

// // Education Model
// const Education = sequelize.define('Education', {
//   education_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'user_id'
//     }
//   },
//   institution: DataTypes.STRING(100),
//   major: DataTypes.STRING(100),
//   degree_type: DataTypes.ENUM('High School', 'Diploma', 'Associate', 'Bachelor', 'Master', 'Doctorate'),
//   start_year: DataTypes.INTEGER,
//   end_year: DataTypes.INTEGER,
//   gpa: DataTypes.DECIMAL(3, 2)
// }, { timestamps: false });

// // Certifications Model
// const Certifications = sequelize.define('Certifications', {
//   certification_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'user_id'
//     }
//   },
//   title: DataTypes.STRING(100),
//   institution: DataTypes.STRING(100),
//   year_awarded: DataTypes.INTEGER
// }, { timestamps: false });

// // Projects Model
// const Projects = sequelize.define('Projects', {
//   project_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'user_id'
//     }
//   },
//   title: DataTypes.STRING(100),
//   description: DataTypes.TEXT,
//   technologies: DataTypes.STRING(255)
// }, { timestamps: false });

// // References Model
// const References = sequelize.define('References', {
//   reference_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User,
//       key: 'user_id'
//     }
//   },
//   name: DataTypes.STRING(100),
//   relationship: DataTypes.STRING(50),
//   phone_number: DataTypes.STRING(20),
//   email: DataTypes.STRING(100)
// }, { timestamps: false });

// // Resume Model
// const Resume = sequelize.define('Resume', {
//   resume_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   user_id: DataTypes.INTEGER,
//   contact_id: DataTypes.INTEGER,
//   professional_id: DataTypes.INTEGER,
//   experience_id: DataTypes.INTEGER,
//   skill_id: DataTypes.INTEGER,
//   education_id: DataTypes.INTEGER,
//   reference_id: DataTypes.INTEGER,
//   certification_id: DataTypes.INTEGER,
//   project_id: DataTypes.INTEGER
// }, { timestamps: false });

// // Relationships
// User.hasMany(ContactInfo, { foreignKey: 'user_id', onDelete: 'CASCADE' });
// User.hasMany(ProfessionalInfo, { foreignKey: 'user_id', onDelete: 'CASCADE' });
// User.hasMany(Experience, { foreignKey: 'user_id', onDelete: 'CASCADE' });
// User.hasMany(Skills, { foreignKey: 'user_id', onDelete: 'CASCADE' });
// User.hasMany(Education, { foreignKey: 'user_id', onDelete: 'CASCADE' });
// User.hasMany(Certifications, { foreignKey: 'user_id', onDelete: 'CASCADE' });
// User.hasMany(Projects, { foreignKey: 'user_id', onDelete: 'CASCADE' });
// User.hasMany(References, { foreignKey: 'user_id', onDelete: 'CASCADE' });

// Resume.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
// Resume.belongsTo(ContactInfo, { foreignKey: 'contact_id', onDelete: 'SET NULL' });
// Resume.belongsTo(ProfessionalInfo, { foreignKey: 'professional_id', onDelete: 'SET NULL' });
// Resume.belongsTo(Experience, { foreignKey: 'experience_id', onDelete: 'SET NULL' });
// Resume.belongsTo(Skills, { foreignKey: 'skill_id', onDelete: 'SET NULL' });
// Resume.belongsTo(Education, { foreignKey: 'education_id', onDelete: 'SET NULL' });
// Resume.belongsTo(References, { foreignKey: 'reference_id', onDelete: 'SET NULL' });
// Resume.belongsTo(Certifications, { foreignKey: 'certification_id', onDelete: 'SET NULL' });
// Resume.belongsTo(Projects, { foreignKey: 'project_id', onDelete: 'SET NULL' });

// module.exports = {
//   ContactInfo,
//   ProfessionalInfo,
//   Experience,
//   Skills,
//   Education,
//   Certifications,
//   Projects,
//   References,
//   Resume
// };
