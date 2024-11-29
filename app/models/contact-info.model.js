module.exports = (sequelize, Sequelize) => {
  const Contact_info = sequelize.define("contact-info", {
    contact_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    full_name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    address: Sequelize.STRING,
    timestamps: false,
  });

  return Contact_info;
};
