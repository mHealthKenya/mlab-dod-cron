const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('srl_viral_loads', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kdod_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_collected: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    art_start_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    current_regimen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_art_regimen: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    art_line: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    justification_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_sex: {
      type: DataTypes.STRING(255),
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
    tableName: 'srl_viral_loads',
    schema: 'public',
    timestamps: false
  });
};
