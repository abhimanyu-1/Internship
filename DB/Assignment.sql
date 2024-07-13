create database OrganizationDB;
use OrganizationDB;

create table Departments(
						 DepartmentID int primary key auto_increment,
                         DepartmentName varchar(100),
                         CreatedTimestamp timestamp default current_timestamp);
                         
create table Employees(
						EmployeeID int primary key auto_increment,
                        FirstName varchar(50),
                        LastName varchar(50),
                        Email varchar(100),
                        PhoneNumber varchar(15),
                        HireDate date,
                        JobTitle varchar(50),
                        DepartmentID int,
                        CreatedTimestamp timestamp default current_timestamp,
                        foreign key(DepartmentID) references Departments(DepartmentID));
                        
create table Projects(
					   ProjectID int primary key auto_increment , 
                       ProjectName varchar(100),
                       StartDate date,
                       EndDate date,
                       CreatedTimestamp timestamp default current_timestamp);
                       
create table EmployeeProjects(
							   EmployeeID int ,
                               ProjectID int,
                               role varchar(50),
                               CreatedTimestamp timestamp default current_timestamp,
                               foreign key(EmployeeID) references Employees(EmployeeID),
                               foreign key(ProjectID) references Projects(ProjectID) );


desc Departments;
desc Employees;
desc Projects;
desc EmployeeProjects;

alter table Employees add column Salary decimal(10,2);

-- Data Insersion

INSERT INTO Departments (DepartmentName) VALUES
('Human Resources'),
('Finance'),
('IT'),
('Sales'),
('Marketing'),
('Research and Development'),
('Customer Support'),
('Legal'),
('Operations'),
('Administration');

INSERT INTO Employees (FirstName, LastName, Email, PhoneNumber, HireDate, JobTitle, DepartmentID, Salary) VALUES
('John', 'Doe', 'john.doe@example.com', '1234567890', '2020-01-15', 'HR Manager', 1, 60000.00),
('Jane', 'Smith', 'jane.smith@example.com', '1234567891', '2019-05-22', 'Accountant', 2, 50000.00),
('Alice', 'Johnson', 'alice.johnson@example.com', '1234567892', '2018-11-12', 'IT Specialist', 3, 70000.00),
('Bob', 'Brown', 'bob.brown@example.com', '1234567893', '2021-03-05', 'Sales Executive', 4, 55000.00),
('Eve', 'Davis', 'eve.davis@example.com', '1234567894', '2017-09-25', 'Marketing Coordinator', 5, 48000.00),
('Charlie', 'Miller', 'charlie.miller@example.com', '1234567895', '2016-07-14', 'R&D Engineer', 6, 75000.00),
('David', 'Wilson', 'david.wilson@example.com', '1234567896', '2015-02-18', 'Support Specialist', 7, 45000.00),
('Grace', 'Lee', 'grace.lee@example.com', '1234567897', '2022-06-30', 'Legal Advisor', 8, 65000.00),
('Frank', 'Taylor', 'frank.taylor@example.com', '1234567898', '2020-10-01', 'Operations Manager', 9, 58000.00),
('Hannah', 'Anderson', 'hannah.anderson@example.com', '1234567899', '2019-08-20', 'Admin Assistant', 10, 42000.00);

INSERT INTO Projects (ProjectName, StartDate, EndDate) VALUES
('Project Alpha', '2020-01-01', '2020-12-31'),
('Project Beta', '2019-02-01', '2019-11-30'),
('Project Gamma', '2021-03-01', '2021-09-30'),
('Project Delta', '2018-04-01', '2018-10-31'),
('Project Epsilon', '2020-05-01', '2021-04-30'),
('Project Zeta', '2019-06-01', '2020-05-31'),
('Project Eta', '2022-07-01', '2023-06-30'),
('Project Theta', '2021-08-01', '2022-07-31'),
('Project Iota', '2023-09-01', '2024-08-31'),
('Project Kappa', '2018-10-01', '2019-09-30');

INSERT INTO EmployeeProjects (EmployeeID, ProjectID, Role) VALUES
(1, 1, 'Manager'),
(2, 2, 'Coordinator'),
(3, 3, 'Developer'),
(4, 4, 'Sales Lead'),
(5, 5, 'Marketing Lead'),
(6, 6, 'Researcher'),
(7, 7, 'Support Lead'),
(8, 8, 'Legal Advisor'),
(9, 9, 'Operations Lead'),
(10, 10, 'Administrator'),
(1, 2, 'Assistant Manager'),
(2, 3, 'Finance Specialist'),
(3, 4, 'Tech Lead'),
(4, 5, 'Sales Specialist'),
(5, 6, 'Marketing Specialist'),
(6, 7, 'R&D Specialist'),
(7, 8, 'Customer Support'),
(8, 9, 'Legal Specialist'),
(9, 10, 'Operations Specialist'),
(10, 1, 'Admin Specialist');



select * from Departments;
select * from Employees;
select * from Projects;
select * from EmployeeProjects;

-- INSTRUCTIONS

-- update salary for one of the employees
update employees
set salary =  50000.00
where EmployeeID = 1 ;

-- delete from project
DELETE FROM EmployeeProjects WHERE ProjectID = 1;
DELETE FROM Projects WHERE ProjectID = 1;

-- Drop table
drop table EmployeeProjects; 

-- basic query 
select * from employees
where DepartmentID  = (select DepartmentID from Departments where DepartmentName = 'IT');

select DepartmentName , 
(select count(*) from Employees where Employees.DepartmentID = Departments.DepartmentID)
from Departments;

select max(salary) as MAXIMUM , min(salary) as MINIMUM
from employees;

----------------------------------------------------------------
DELIMITER $$

CREATE FUNCTION calc_years_of_exp(HireDate DATE)  RETURNS INT DETERMINISTIC
BEGIN
    DECLARE years_of_exp INT;
    
    SET years_of_exp = YEAR(CURDATE()) - YEAR(HireDate);
        
    RETURN years_of_exp;
END $$

DELIMITER ;

SELECT calc_years_of_exp('2023-01-05') AS years_of_exp;

----------------------------------------------------------------

DELIMITER $$

CREATE PROCEDURE update_employee_email(Empid INT,new_email VARCHAR(100))
BEGIN

    UPDATE employees SET Email = new_email WHERE EmployeeID = Empid;
    IF row_count() > 0 THEN
        SELECT 'Success, Email updated' AS Message;
    ELSE
        SELECT 'Error, No rows affected' AS Error;
    END IF;
END $$

DELIMITER ;

CALL update_employee_email(1, 'sino@gmail.com');

select * from employees;

----------------------------------------------------------------

CREATE TABLE employee_log (
    LogID INT AUTO_INCREMENT PRIMARY KEY,
    EmployeeID INT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    PhoneNumber VARCHAR(15),
    HireDate DATE,
    JobTitle VARCHAR(50),
    DepartmentID INT,
    CreatedTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    salary DECIMAL(10,2)
);

DELIMITER $$

CREATE TRIGGER before_update_employee
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_log (
        EmployeeID,
        FirstName,
        LastName,
        Email,
        PhoneNumber,
        HireDate,
        JobTitle,
        DepartmentID,
        CreatedTimestamp,
        Salary
    )
    VALUES (
        OLD.EmployeeID,
        OLD.FirstName,
        OLD.LastName,
        OLD.Email,
        OLD.PhoneNumber,
        OLD.HireDate,
        OLD.JobTitle,
        OLD.DepartmentID,
        OLD.CreatedTimestamp,
        OLD.Salary
    );
END $$
DELIMITER ;

UPDATE employees
SET Email = 'abcdefg@gmail.com'
WHERE EmployeeID = 1;

select * from employees;
select * from employee_log;


-------------------------------------------------

DELIMITER $$
CREATE PROCEDURE name_update(u_name varchar(20) , id int)
BEGIN
	UPDATE employees set FirstName = u_name where EmployeeID = id ;
END $$
DELIMITER ;

call name_update('kesu',1) ;
SELECT * FROM employees;

-------------------------------------------------

