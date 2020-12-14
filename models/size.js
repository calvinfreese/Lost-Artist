module.exports = function (sequelize, DataTypes) {
  var Size = sequelize.define("sizes", {
      size_code: {
          type: DataTypes.STRING,
          allowNull: false
      },
      size_desc: {
          type: DataTypes.STRING,
          allowNull: false
      },
    });
  return Size;
};
