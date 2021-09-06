//where we write our knex querisy
const knex = require("knex");

//we need to create a configuration, anything thing need to interact with database, needs to point at that file
//where are our data live
const config = require("../knexfile");
//call knex and pass developent to it, later you may have production, staging...
const db = knex(config.development);

//check the knex doc, here we use db, whatever you use later, will replace knex

const add = async (lesson) => {
  const [id] = await db("lessons").insert(lesson);
  return id;
};

const find = async () => {
  const lessons = await db("lessons");
  return lessons;
};
module.exports = { add, find };
