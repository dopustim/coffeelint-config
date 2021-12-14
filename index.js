const possibleErrors = require("./rules/possible-errors.json")
const stylisticIssues = require("./rules/stylistic-issues.json")

module.exports = {
    ...possibleErrors,
    ...stylisticIssues
}
