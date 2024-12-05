module.exports = (sequelize, Sequelize) => {
    const Certification = sequelize.define(
      "certification",
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
        institution: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        year_awarded: {
          type: Sequelize.INTEGER, // Storing the year as an integer
          allowNull: false,
        },
      },
      {
        timestamps: true, // Enable createdAt and updatedAt fields
      }
    );
  
    return Certification;
  };
  