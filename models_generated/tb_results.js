const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_results', {
    tb_result_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sample_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    kdod_number: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    age: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    test1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    result_value1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    test2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    result_value2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    test3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    result_value3: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mfl_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    login_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_reviewed: {
      type: DataTypes.DATE,
      allowNull: false
    },
    record_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    testing_lab: {
      type: DataTypes.INTEGER,
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
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tb_results',
    schema: 'public',
    timestamps: false
  });
};
