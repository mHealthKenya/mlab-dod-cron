const sequelize = require("../dbconfig_mlab");
const DataTypes = require('sequelize');

const MlabResult = sequelize.sequelize.define(
  'results', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    source: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    result_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    result_type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    request_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kdod_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    age: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    result_content: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    units: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    data_key: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lab_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cst: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cj: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    csr: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    date_collected: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lab_order_date: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sys_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    date_sent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_delivered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_read: {
      type: DataTypes.DATE,
      allowNull: true
    },
    processed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    il_send: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.Sequelize.fn('now')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.Sequelize.fn('now')
    },
    lab_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    client_notified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'results',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "results_created_at_idx",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "results_data_key_idx",
        fields: [
          { name: "data_key" },
        ]
      },
      {
        name: "results_date_collected_idx",
        fields: [
          { name: "date_collected" },
        ]
      },
      {
        name: "results_date_sent_idx",
        fields: [
          { name: "date_sent" },
        ]
      },
      {
        name: "results_gender_idx",
        fields: [
          { name: "gender" },
        ]
      },
      {
        name: "results_id_idx",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "results_mfl_code_idx",
        fields: [
          { name: "mfl_code" },
        ]
      },
      {
        name: "results_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "results_result_type_idx",
        fields: [
          { name: "result_type" },
        ]
      },
    ]
  }
);

module.exports.MlabResult = MlabResult;


