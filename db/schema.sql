-- create database
DROP DATABASE IF EXISTS managementsystem_db;
CREATE DATABASE managementsystem_db;

-- connect to the database
\c managementsystem_db;

-- create department table
CREATE TABLE department(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- create role table
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- create employee table
CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
    -- FOREIGN KEY (manager_id) REFERENCES employee(id)
);


-- -- create database
-- DROP DATABASE IF EXISTS managementsystem_db;
-- CREATE DATABASE managementsystem_db;

-- \c managementsystem_db;

-- CREATE TABLE department(
--     id SERIAL PRIMARY KEY, 
--     name VARCHAR(30) UNIQUE NOT NULL 
    
-- );

-- CREATE TABLE role (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(30) UNIQUE NOT NULL,
--     salary DECIMAL NOT NULL,
--     department_id INTEGER NOT NULL,
--     FOREIGN KEY (department_id) 
--     REFERENCES department(id) 
-- );

-- CREATE TABLE employee(
--     id SERIAL PRIMARY KEY,
--     first_name VARCHAR(30), 
--     last_name VARCHAR(30),
--     role_id INTEGER NOT NULL,
--     manager_id INTEGER, 
--     FOREIGN KEY (role_id)
--     REFERENCES role(id), 
--     FOREIGN KEY (manager_id)
--     REFERENCES employee(id)

-- );












-- department

-- id: SERIAL PRIMARY KEY

-- name: VARCHAR(30) UNIQUE NOT NULL to hold department name

-- role

-- id: SERIAL PRIMARY KEY

-- title: VARCHAR(30) UNIQUE NOT NULL to hold role title

-- salary: DECIMAL NOT NULL to hold role salary

-- department_id: INTEGER NOT NULL to hold reference to department role belongs to

-- employee

-- id: SERIAL PRIMARY KEY

-- first_name: VARCHAR(30) NOT NULL to hold employee first name

-- last_name: VARCHAR(30) NOT NULL to hold employee last name

-- role_id: INTEGER NOT NULL to hold reference to employee role

-- manager_id: INTEGER to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)