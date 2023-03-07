const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, GitHubUser) {
    super(name, id, email);
    this.GitHubUser = GitHubUser;
  }
  getGithub() {
    return this.GitHubUser;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
