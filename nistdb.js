var publicationRoute = require("./data/Publications/v1/Publications.json");
var businessroleRoute = require("./data/Roles/v1/Roles.json");
var minimumrequirementRoute = require("./data/FIPS200/v1/FIPS200.json");

module.exports = function () {
  return {
    Publications: publicationRoute,
    Roles: businessroleRoute,
    MinimumRequirements: minimumrequirementRoute
  };
};