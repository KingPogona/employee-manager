const mysql = require('mysql2/promise');
const cTable = require('console.table');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'Add your password here',
    database: 'employees',
    connectionLimit: 10,
    waitForConnections: true
});
const getConnection = async () => pool.getConnection();
// export { getConnection }






async function addEmployee(firstName, LastName, roleID, managerID) {
    const conn = await getConnection();
    let [rows, fields] = await conn.query(
        'INSERT INTO employees SET ?',
        {
            first_name: firstName,
            last_name: LastName,
            role_id: roleID,
            manager_id: managerID
        });

    conn.release();

    // console.table(rows);
    return rows;
}

async function updateEmployeeRole(id, roleID) {
    const conn = await getConnection();
    let [rows, fields] = await conn.query(
        `UPDATE employees SET ? WHERE ?`,
        [
            { role_id: roleID },
            { id: id }
        ],
    );

    conn.release();

    // console.table(rows);
    return rows;
}

async function readEmployees() {
    const conn = await getConnection();
    let [rows, fields] = await conn.query(
        'SELECT * FROM employees');

    conn.release();

    console.table('\n',rows);
    return rows;
}

async function addRole(title, salary, departmentID) {
    const conn = await getConnection();
    let [rows, fields] = await conn.query(
        'INSERT INTO roles SET ?',
        {
            title: title,
            salary: salary,
            department_id: departmentID
        });

    conn.release();

    // console.table(rows);
    return rows;
}

async function readRoles() {
    const conn = await getConnection();
    let [rows, fields] = await conn.query(
        'SELECT * FROM roles');

    conn.release();

    console.table('\n',rows);
    return rows;
}

async function addDepartment(name) {
    const conn = await getConnection();
    let [rows, fields] = await conn.query(
        'INSERT INTO departments SET ?',
        {
            name: name
        });

    conn.release();

    // console.table(rows);
    return rows;
}

async function readDepartments() {
    const conn = await getConnection();
    let [rows, fields] = await conn.query(
        'SELECT * FROM departments');

    conn.release();

    console.table('\n',rows);
    return rows;
}

async function endConnection() {
    const conn = await getConnection();
    conn.destroy();
    return "Connection ended"
};


module.exports = {
    addEmployee,
    updateEmployeeRole,
    readEmployees,
    addRole,
    readRoles,
    addDepartment,
    readDepartments,

    endConnection
}
