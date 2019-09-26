const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

module.exports = {
  db
}

const page = db.define("page", { title: Sequelize.STRING, slug: Sequelize.STRING, content: Sequelize.TEXT, status: Sequelize.INTEGER});
const user = db.define("user", { name: Sequelize.STRING, email: Sequelize.STRING,})