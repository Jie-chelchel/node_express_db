exports.up = function (knex) {
  return knex.schema
    .createTable("lessons", (tbl) => {
      tbl.increments(); //id filed
      tbl.text("name", 128).notNullable();
      tbl.timestamps(true, true);
    })
    .createTable("messages", (tbl) => {
      tbl.increments(); //id filed
      tbl.string("sender", 256).notNullable().index();
      tbl.text("text").notNullable();
      tbl.timestamps(true, true);

      //foreign key info to lesson table
      tbl
        .integer("lessons_id")
        .unsigned()
        .references("id")
        .inTable("lessons")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

//undo any changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("messages").dropTableIfExists("lessons");
};
