module.exports = (sequelize, DataTypes) => {
    const ProfessionalInfo = sequelize.define(
      "professional_info",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        github: {
          type: DataTypes.STRING,
        },
        linkedin: {
          type: DataTypes.STRING,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        timestamps: true,
        tableName: "professional_infos",
      }
    );
  
    return ProfessionalInfo;
  };
  