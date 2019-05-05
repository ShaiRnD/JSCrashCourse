-- Answers

-- 1
SELECT COUNT(*) AS number_of_row FROM employees;

-- 2
SELECT DISTINCT dept_no FROM departments;

-- 3
SELECT dept_name, RIGHT(dept_no, 1) AS deparment_number FROM departments
	WHERE RIGHT(dept_no, 1) % 2 = 0;

-- 4
SELECT emp_no, title, YEAR(from_date) AS from_year, YEAR(to_date) AS to_year FROM titles
	WHERE title = "Engineer"
    AND YEAR(from_date) = 1985 AND YEAR(to_date) = 1990;

-- 5
-- works but slow

SELECT salary as highest_salary, emp_no FROM salaries
	WHERE salary = (
		SELECT MAX(salary) FROM salaries
    );

-- faster
SELECT salary as highest_salary, emp_no FROM salaries
	ORDER BY salary DESC LIMIT 1;

-- 6
SELECT salary as lowest_salary, emp_no FROM salaries
	ORDER BY salary LIMIT 1;

-- 7
SELECT LENGTH(dept_name) AS name_length, dept_name FROM departments
	ORDER BY LENGTH(dept_name) DESC LIMIT 1;
    
-- 8
SELECT LENGTH(dept_name) AS name_length, dept_name FROM departments
	ORDER BY LENGTH(dept_name) LIMIT 1;

-- 9 
SELECT * FROM departments
	WHERE LEFT(dept_name, 1) = "R";
    
-- better
SELECT * FROM departments
	WHERE dept_name LIKE "R%";

-- 10
SELECT COUNT(*) AS number_of_deps_m FROM departments
	WHERE dept_name LIKE "M%";

-- 11 
SELECT * FROM salaries
	WHERE YEAR(from_date) <= 2000
    AND YEAR(to_date) >= 2000;