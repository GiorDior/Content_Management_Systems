# Command Line Employee Management Application

This command-line application allows users to manage departments, roles, and employees in a company database. Users can perform various actions such as viewing all departments, roles, and employees, as well as adding new departments, roles, employees, and updating employee roles.

## Installation

To use this application, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/yourusername/repository.git`
2. Navigate to the project directory in your terminal
3. Install the required dependencies by running `npm install`

## Usage

To start the application, run `node index.js` in your terminal. You will be presented with a series of options to choose from:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

Choose the desired option by entering the corresponding number or keyword.

### View All Departments

Selecting this option will display a formatted table showing department names and department IDs.

### View All Roles

Selecting this option will display a formatted table showing job titles, role IDs, departments that roles belong to, and their respective salaries.

### View All Employees

Selecting this option will display a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and managers that the employees report to.

### Add a Department

Selecting this option will prompt you to enter the name of the department. Once entered, the department will be added to the database.

### Add a Role

Selecting this option will prompt you to enter the name, salary, and department for the role. Once entered, the role will be added to the database.

### Add an Employee

Selecting this option will prompt you to enter the employee’s first name, last name, role, and manager. Once entered, the employee will be added to the database.

### Update an Employee Role

Selecting this option will prompt you to select an employee to update and their new role. Once entered, the employee's role will be updated in the database.

## Contribution

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
