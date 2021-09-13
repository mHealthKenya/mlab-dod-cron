const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('srl_eid', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    selected_sex: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_regimen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_alive: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hein_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    patient_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    entry_point: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_collected: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    prophylaxis_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    infant_feeding: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pcr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alive_dead: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mother_age: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    haart_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    processed: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    facility: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lab_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lab_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'srl_eid',
    schema: 'public',
    timestamps: false
  });
};
