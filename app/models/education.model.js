module.exports = (sequelize, Sequelize) => {
    const Education = sequelize.define("educations", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      institution: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      major: {
        type: Sequelize.STRING,
      },
      degree_type: {
        type: Sequelize.ENUM(
            "High School",
            "Diploma",
            "Associate",
            "Bachelor",
            "Master",
            "Doctorate"
          ),
      },
      start_year: {
        type: Sequelize.DATE,
      },
      end_year: {
        type: Sequelize.DATE,
      },
      gpa: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: true,
        validate: {
          min: 0.00,
          max: 4.00,
        },
      },
    });
  
    return Education;
  };  