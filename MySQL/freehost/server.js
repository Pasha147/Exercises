const mysql = require("mysql2/promise");

const insertIntoDB = async () => {
  const connection = await mysql.createConnection({
    host: "sql11.freesqldatabase.com",
    user: "sql11494281",
    password: "2Rfrs9R47p",
    database: "sql11494281",
    port: 3306,
  });

  try {
    await connection.query(
      "INSERT INTO Users (User_id, email, first_name, last_name, type) VALUES (1, 'p@p.com', 'pasha', 'fer', 'dir')"
    );
    console.log("inserted");
  } catch (error) {
    console.log("dberr>>>", e);
  }
};

insertIntoDB();
