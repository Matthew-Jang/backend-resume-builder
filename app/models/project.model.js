module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define(
      "project",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        technologies: {
          type: Sequelize.STRING, // Use a string to store a comma-separated list of technologies
          allowNull: true,
        },
      },
      {
        timestamps: true, // Enables createdAt and updatedAt fields
      }
    );
  
    return Project;
  };
  