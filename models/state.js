module.exports = function (sequelize, DataTypes) {
  var State = sequelize.define("State", {
      state_id: {
          type: DataTypes.STRING,
          allowNull: false
      },
      state_desc: {
          type: DataTypes.STRING,
          allowNull: true
      },
    });

    State.associate = function(models) {
      // Associating Artist with Items
      // When an Author is deleted, also delete any associated Posts
      State.hasMany(models.Artist, {
        onDelete: "cascade"
      });
    };

  return State;
};
