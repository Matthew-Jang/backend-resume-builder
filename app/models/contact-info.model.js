module.exports = (sequelize, Sequelize) => {
  const Contact_info = sequelize.define("contact-info", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    full_name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    address: Sequelize.STRING,
    
  },
{
  timestamps: false,
});

  return Contact_info;
};
