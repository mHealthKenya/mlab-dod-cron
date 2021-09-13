const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('srl_hts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sample_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    client_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dob: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_sex: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    test_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_delivery_point: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_test_kit1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lot_number1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expiry_date1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_test_kit2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lot_number2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expiry_date2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    selected_final_result: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sample_tester_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dbs_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dbs_dispatch_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    requesting_provider: {
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
    tableName: 'srl_hts',
    schema: 'public',
    timestamps: false
  });
};
