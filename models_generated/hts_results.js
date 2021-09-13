const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hts_results', {
    nhrl_lab_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    kdod_number: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    age: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    test: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    result_value: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    component: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    submit_date: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date_released: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    processed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sample_id: {
      type: DataTypes.STRING(20),
      allowNull: false
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
    hts_result_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hts_results',
    schema: 'public',
    timestamps: false
  });
};
