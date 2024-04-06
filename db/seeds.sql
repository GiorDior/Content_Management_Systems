INSERT INTO department (name) VALUES
('Engineering'), 
('Marketing'), 
('Technical Support'), 
('Sales');

INSERT INTO role (title, salary, department_id) VALUES
('Lead Marketer', 100000, 2),
('Associate Developer', 80000, 3),
('Junior Developer', 60000, 3),
('Senior Developer', 60000, 3),
('Sales Lead', 80000, 4), 
('Lead Engineer', 100000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Jared', 'Ross', 1, NULL),
('Sarah', 'Evans', 2, 1),
('Jane', 'Do', 3, 2), 
('George', 'Rico', 4, 3),
('Nate', 'Jones', 5, 4), 
('Giordan', 'Thompson', 6, NULL); 