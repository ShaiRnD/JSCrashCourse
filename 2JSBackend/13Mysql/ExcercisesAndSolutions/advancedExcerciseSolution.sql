-- Answers

-- 1
SELECT * FROM employees
	WHERE YEAR(birth_date) > 1960
    ORDER BY birth_date;
    
-- 2
SELECT *, (LENGTH(first_name) + LENGTH(last_name)) AS name_length 
	FROM employees
	WHERE (LENGTH(first_name) + LENGTH(last_name)) < 26
	ORDER BY (LENGTH(first_name) + LENGTH(last_name)) DESC;

-- 3
SELECT emp_no, first_name, (DATEDIFF(hire_date, birth_date)) AS days_alive_before_hired 
	FROM employees;

-- 4
SELECT * from departments
	ORDER BY RAND();

-- 5
SELECT * FROM employees
	WHERE YEAR(hire_date) = 2000;

-- 6
SELECT YEAR(birth_date) AS year_of_birth, COUNT(*) AS num_of_people FROM employees
	GROUP BY YEAR(birth_date);

-- 7
SELECT MONTH(birth_date) AS month_of_birth, COUNT(*) AS num_of_people FROM employees
	GROUP BY MONTH(birth_date);

-- 8
SELECT last_name, COUNT(*) AS num_of_people FROM employees
	GROUP BY last_name
    ORDER BY COUNT(*) DESC
    LIMIT 1;

-- 9 
SELECT gender, COUNT(*) AS num_of_people FROM employees
	GROUP BY gender;

-- 10
SELECT e.*, d.dept_name 
	FROM employees e, departments d, dept_emp de
	WHERE e.emp_no = de.emp_no
    AND d.dept_no = de.dept_no;

-- better
SELECT e.*, d.dept_name 
	FROM employees e
    INNER JOIN dept_emp de
    ON e.emp_no = de.emp_no
    INNER JOIN departments d
    ON d.dept_no = de.dept_no;

-- 11
SELECT d.*, concat(e.first_name, " ", e.last_name) AS manager
	FROM departments d, dept_manager dm, employees e
    WHERE d.dept_no = dm.dept_no
		AND dm.emp_no = e.emp_no;

SELECT d.*, concat(e.first_name, " ", e.last_name) AS manager
	FROM departments d
    INNER JOIN dept_manager dm
    ON d.dept_no = dm.dept_no
    INNER JOIN employees e
    ON dm.emp_no = e.emp_no
        
-- 12
SELECT e.*, concat(m.first_name, " ", m.last_name) AS manager
	FROM employees e, dept_emp de, dept_manager dm, employees m
    WHERE e.emp_no = de.emp_no
		AND de.dept_no = dm.dept_no
        AND dm.emp_no = m.emp_no;

SELECT e.*, concat(m.first_name, " ", m.last_name) AS manager
	FROM employees e
    INNER JOIN dept_emp de
    ON e.emp_no = de.emp_no
    INNER JOIN dept_manager dm
    ON de.dept_no = dm.dept_no
    INNER JOIN employees m
    ON dm.emp_no = m.emp_no;

-- 13
SELECT e.*, s.salary, s.from_date, s.to_date FROM employees e, salaries s
	WHERE e.emp_no = s.emp_no;

-- 14
SELECT concat(e.first_name, " ", e.last_name) AS employee, SUM(s.salary) AS total_salary 
	FROM employees e, salaries s
	WHERE e.emp_no = s.emp_no
    GROUP BY e.emp_no;

-- 15
SELECT concat(e.first_name, " ", e.last_name) AS employee, t.title
	FROM employees e, titles t
    WHERE e.emp_no = t.emp_no;
    
-- 16
SELECT concat(e.first_name, " ", e.last_name) AS employee, datediff(to_date, from_date) AS longest_titie_in_days
	FROM employees e, titles t
    WHERE e.emp_no = t.emp_no
		AND t.to_date != "9999-01-01"
    ORDER BY datediff(to_date, from_date) DESC
    LIMIT 1;