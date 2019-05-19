# SQL

## Data types
* varchar
* int
* tinyint (used as boolean)

## Select 
For simplicity right click on the DB and make the default (so no need for employees.table)
```sql
SELECT * FROM employees;

SELECT emp_no, first_name FROM employees;

SELECT * FROM employees
    WHERE emp_no = 10008 AND first_name = "Saniya"
    OR emp_no = 10009;

SELECT * FROM employees
    WHERE first_name like "%S%";

SELECT * FROM titles
    WHERE to_date IS NOT NULL;

SELECT REVERSE(last_name) AS r_last_name, last_name FROM employees
    ORDER BY r_last_name;    

SELECT REVERSE(last_name) AS r_last_name, last_name FROM employees
    ORDER BY r_last_name DESC;

SELECT DISTINCT last_name FROM employees;

SELECT COUNT(*) FROM employees;
```
## Creating a DB and table
1. Click *create a new scheme in the connected server*
2. Give it a name: bots
3. Click Apply
4. Right click the *tables* in the new DB and create a new table
5. Give it a name: users
6. Add the next columns:
    * id: int, pk, nn, ai
    * name: varchar
    * address: varchar
7. Click Apply Apply

```sql
INSERT INTO bots.users (name, address)
    VALUES ("nnn", "asdasd");

-- X3 times

DELETE FROM bots.users
    WHERE id = 3;

DELETE FROM bots.users
    WHERE id in(1,2,3);
```

