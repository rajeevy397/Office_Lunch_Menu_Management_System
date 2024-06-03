module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      lunchChoice: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
      },
  });

  return Employee;
};
