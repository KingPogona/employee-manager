const mysql = require('mysql2');
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'password',
    database: 'employees'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    // addEmployee();
});





// Employees queries
addEmployee = (firstName, LastName, roleID, managerID) => {
    console.log('Inserting a new employee...\n');
    const query = connection.query(
        'INSERT INTO employees SET ?',
        {
            first_name: 'Martin',
            last_name: 'Donnell',
            role_id: 3,
            manager_id: null
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' employee inserted!\n');

            // updateEmployeeRole();
        }
    );
    // logs the actual query being run
    console.log(query.sql);
};

updateEmployeeRole = () => {
    console.log('Updating employee role...\n');

    const query = connection.query(
        `UPDATE employees SET ? WHERE ?`,
        [
            { role_id: 5 },
            { id: 6 }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' employee role updated!\n');

            // readEmployees();
        }
    );
    // logs the actual query being run
    console.log(query.sql);
};

readEmployees = () => {
    console.log('Selecting all employees...\n');
    const query = connection.query(
        `SELECT * from employees`,
        function (err, res) {
            if (err) throw err;
            console.table(res);

            // addRole();
        }
    );
};



// Roles queries
addRole = (title, salary, departmentID) => {
    console.log('Inserting a new role...\n');
    const query = connection.query(
        'INSERT INTO roles SET ?',
        {
            title: 'composer',
            salary: '50000',
            department_id: 3
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' role inserted!\n');

            // readRoles();
        }
    );
    // logs the actual query being run
    console.log(query.sql);
};

readRoles = () => {
    console.log('Selecting all roles...\n');
    const query = connection.query(
        `SELECT * from roles`,
        function (err, res) {
            if (err) throw err;
            console.table(res);

            // addDepartment();
        }
    );
};


// Departments queries
addDepartment = (name) => {
    console.log('Inserting a new department...\n');
    const query = connection.query(
        'INSERT INTO departments SET ?',
        {
            name: 'Customer Support'
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + ' department inserted!\n');
   
            // readDepartments();
        }
    );
    // logs the actual query being run
    console.log(query.sql);
};

readDepartments = () => {
    console.log('Selecting all departments...\n');
    const query = connection.query(
        `SELECT * from departments`,
        function (err, res) {
            if (err) throw err;
            console.table(res);

            // endConnection();
        }
    );
};




endConnection = async () => {
    await connection.end();
    console.log("connection ended")
    return "connection ended"
};






module.exports = {
    connection,

    addEmployee,
    updateEmployeeRole,
    readEmployees,
    addRole,
    readRoles,
    addDepartment,
    readDepartments,

    endConnection
}