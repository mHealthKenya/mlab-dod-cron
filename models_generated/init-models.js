var DataTypes = require("sequelize").DataTypes;
var _api_users = require("./api_users");
var _clients = require("./clients");
var _county = require("./county");
var _health_facilities = require("./health_facilities");
var _health_facilities_old = require("./health_facilities_old");
var _hts_results = require("./hts_results");
var _il_facilities = require("./il_facilities");
var _inbox = require("./inbox");
var _new_facilities = require("./new_facilities");
var _oauth_access_tokens = require("./oauth_access_tokens");
var _oauth_auth_codes = require("./oauth_auth_codes");
var _oauth_clients = require("./oauth_clients");
var _oauth_personal_access_clients = require("./oauth_personal_access_clients");
var _oauth_refresh_tokens = require("./oauth_refresh_tokens");
var _oldfacility = require("./oldfacility");
var _results = require("./results");
var _send_log = require("./send_log");
var _service = require("./service");
var _sms_gateway = require("./sms_gateway");
var _srl_eid = require("./srl_eid");
var _srl_hts = require("./srl_hts");
var _srl_viral_loads = require("./srl_viral_loads");
var _sub_county = require("./sub_county");
var _tb_results = require("./tb_results");
var _unit = require("./unit");
var _users = require("./users");

function initModels(sequelize) {
  var api_users = _api_users(sequelize, DataTypes);
  var clients = _clients(sequelize, DataTypes);
  var county = _county(sequelize, DataTypes);
  var health_facilities = _health_facilities(sequelize, DataTypes);
  var health_facilities_old = _health_facilities_old(sequelize, DataTypes);
  var hts_results = _hts_results(sequelize, DataTypes);
  var il_facilities = _il_facilities(sequelize, DataTypes);
  var inbox = _inbox(sequelize, DataTypes);
  var new_facilities = _new_facilities(sequelize, DataTypes);
  var oauth_access_tokens = _oauth_access_tokens(sequelize, DataTypes);
  var oauth_auth_codes = _oauth_auth_codes(sequelize, DataTypes);
  var oauth_clients = _oauth_clients(sequelize, DataTypes);
  var oauth_personal_access_clients = _oauth_personal_access_clients(sequelize, DataTypes);
  var oauth_refresh_tokens = _oauth_refresh_tokens(sequelize, DataTypes);
  var oldfacility = _oldfacility(sequelize, DataTypes);
  var results = _results(sequelize, DataTypes);
  var send_log = _send_log(sequelize, DataTypes);
  var service = _service(sequelize, DataTypes);
  var sms_gateway = _sms_gateway(sequelize, DataTypes);
  var srl_eid = _srl_eid(sequelize, DataTypes);
  var srl_hts = _srl_hts(sequelize, DataTypes);
  var srl_viral_loads = _srl_viral_loads(sequelize, DataTypes);
  var sub_county = _sub_county(sequelize, DataTypes);
  var tb_results = _tb_results(sequelize, DataTypes);
  var unit = _unit(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  clients.belongsTo(health_facilities, { as: "facility", foreignKey: "facility_id"});
  health_facilities.hasMany(clients, { as: "clients", foreignKey: "facility_id"});

  return {
    api_users,
    clients,
    county,
    health_facilities,
    health_facilities_old,
    hts_results,
    il_facilities,
    inbox,
    new_facilities,
    oauth_access_tokens,
    oauth_auth_codes,
    oauth_clients,
    oauth_personal_access_clients,
    oauth_refresh_tokens,
    oldfacility,
    results,
    send_log,
    service,
    sms_gateway,
    srl_eid,
    srl_hts,
    srl_viral_loads,
    sub_county,
    tb_results,
    unit,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
