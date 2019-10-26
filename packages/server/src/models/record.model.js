// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const record = sequelizeClient.define('record', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ttl: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 150
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    apikey: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  }, {
    tableName: 'records',
    timestamps: true,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  record.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return record;
};
