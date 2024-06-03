module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
      date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
      },
      options: {
          type: DataTypes.JSON,
          allowNull: false,
      },
  });

  return Menu;
};
