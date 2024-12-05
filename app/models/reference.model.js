module.exports = (sequelize, Sequelize) => {
    const Reference = sequelize.define("reference", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      referenceName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      relationship: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
      { 
        timestamps: false 
    });
  
  
    return Reference;
  };  