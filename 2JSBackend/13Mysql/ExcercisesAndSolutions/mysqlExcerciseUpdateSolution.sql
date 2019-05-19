-- Answers
-- 1
UPDATE departments
	SET dept_name = "International Sales"
	WHERE dept_name = "Sales";

-- 2
UPDATE titles
	SET title = REPLACE(title, "Senior", "Junior")
    WHERE title like "Senior%";

-- 3
INSERT INTO departments (dept_no, dept_name)
    VALUES ("d000", "Office Managment");

-- 4
INSERT INTO employees (emp_no, birth_date, first_name, last_name, gender, hire_date)
    VALUES ("10000", "1989-01-16", "Shai", "Rippel", "M", "2042-4-20");

-- 5
DELETE FROM employees
	WHERE emp_no = 10001;