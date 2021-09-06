const express = require("express");
const server = express();
const Lessons = require("./models/dbHelpers");
server.use(express.json());
const port = 5000;

server.get("/api/lessons", (req, res) => {
  Lessons.find()
    .then((lessons) => {
      res.status(200).json(lessons);
    })
    .catch((err) => console.log(err));
});

server.post("/api/lessons", (req, res) => {
  Lessons.add(req.body)
    .then((lessonId) => res.status(200).json(lessonId))
    .catch((err) => console.log(err));
});

server.listen(port, () => {
  console.log(`server listening on port:  ${port}`);
});

//install knex

//1. setup server, then run      npx knex init
//it will give knexfile.js
//2. go into knexfile, change develpoment filename and path
//3. now we are ready to make or change a table, called migration,
/// first run in terminal : npx knex migrate:make lesson_table
//4 now you see that migration fold and file inside
// up means you create or change, down means you deltele, go to that file finshing creating table
//5 know let run migration , table will be in your data folder
// npx knex migrate:latest
//now you get your database

//5. make a models folder, dbHelper.js file that is where you write your knex queries
