// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

//dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const { Pool } = require("pg");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDatabase = process.env.DB_DATABASE;

const pool = new Pool(
  {
    //host name
    //user
    //password
    //name of db
    //port - 5432
    user: dbUser,
    password: dbPassword,
    host: "localhost",
    database: dbDatabase,
    port: 5432,
  },
  console.log("Connected to the managementsystem_db.")
);
pool.connect();

const questions = [
  {
    type: "list",
    message: "Select a following option:",
    name: "input",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
    ],
  },
];

//switch
function init() {
  inquirer.prompt(questions).then((response) => {
    //let result = null;

    switch (response.input) {
      case "view all departments":
        pool.query("SELECT * FROM department", (error, results) => {
          if (error) {
            console.error("Error executing query", error);
            return;
          }
          console.table(results.rows);
        });
        break;
      case "view all roles":
        pool.query("SELECT * FROM role", (error, results) => {
          if (error) {
            console.error("Error executing query", error);
            return;
          }
          console.table(results.rows);
        });
        break;
      case "view all employees":
        pool.query("SELECT * FROM employee", (error, results) => {
          if (error) {
            console.error("Error executing query", error);
            return;
          }
          console.table(results.rows);
        });
        break;
      case "add a department":
        inquirer
          .prompt([
            {
              type: "input",
              name: "departmentName",
              message: "Enter the name of the department: ",
            },
          ])
          .then((answer) => {
            const { departmentName } = answer;

            pool.query(
              `INSERT INTO department (name) VALUES ('${departmentName}')`,
              (error, results) => {
                if (error) {
                  console.error("Error executing query", error);
                  return;
                }
                console.log("Department added Successfully!");
              }
            );
          });
        //insert into - need to pass values to query
        break;
      case "add a role":
        inquirer
          .prompt([
            {
              type: "input",
              name: "roleTitle",
              message: "Enter the title of the role: ",
            },
            {
              type: "input",
              name: "salary",
              message: "Enter the salary of the role: ",
            },
            {
              type: "input",
              name: "department_id",
              message: "Enter the role's department id: ",
            },
          ])
          .then((answer) => {
            const { roleTitle, salary, department_id } = answer;

            pool.query(
              `INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)`,
              [roleTitle, salary, department_id],
              (error, results) => {
                if (error) {
                  console.error("Error executing query", error);
                  return;
                }
                console.log("Role added Successfully!");
              }
            );
          });
        break;
      case "add an employee":
        inquirer
          .prompt([
            {
              type: "input",
              name: "first_name",
              message: "Enter the first name of the employee: ",
            },
            {
              type: "input",
              name: "last_name",
              message: "Enter the last name of the employee: ",
            },
            {
              type: "input",
              name: "role_id",
              message: "Enter the employee's role id: ",
            },
            {
              type: "input",
              name: "manager_id",
              message: "Enter the employee's manager id: ",
            },
          ])
          .then((answer) => {
            const { first_name, last_name, role_id, manager_id } = answer;

            pool.query(
              `INSERT INTO roles (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`,
              [first_name, last_name, role_id, manager_id],
              (error, results) => {
                if (error) {
                  console.error("Error executing query", error);
                  return;
                }
                console.log("Role added Successfully!");
              }
            );
          });
        break;
      case "update an employee role":
        //update - SQL quirey
        break;
    }
  });
}

init();

//how do I have this execute in my termical without having to use command C to exit and restart?
