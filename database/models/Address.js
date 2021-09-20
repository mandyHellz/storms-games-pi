module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    rua: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cep: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, 
  {
    tableName: "addresses"
  })
  
  Address.associate = (models) => {
    Address.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
  });
  }

  return Address;
};