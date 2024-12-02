module.exports = (sequelize, Sequelize) => {
    const Experience = sequelize.define("experience", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      employer: {
        type: Sequelize.STRING,
      },
      start_date: {
        type: Sequelize.DATE,
      },
      end_date: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.STRING,
      },
    },
      { 
        timestamps: false 
    });
  
  
    return Experience;
  };  