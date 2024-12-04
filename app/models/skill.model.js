module.exports = (sequelize, Sequelize) => {
    const Skill = sequelize.define("skill", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      skillInfo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
      { 
        timestamps: false 
    });
  
  
    return Skill;
  };  