module.exports = (sequelize, Sequelize) => {
    const Resume = sequelize.define(
      "resume",
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false, // Name is required
        },
        // Add more fields as needed, such as:
        summary: {
          type: Sequelize.TEXT, // Optional summary about the resume
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW, // Automatically set creation date
        },
      },
      {
        timestamps: false, // Disable Sequelize's default timestamps
      }
    );
  
    return Resume;
  };
  