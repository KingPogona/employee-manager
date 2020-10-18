const mysql = require('mysql2');
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: 'enter password here',
    database: 'employees'
});

startConnection =  () => {
     connection.connect(err => {
        if (err) throw err;
    });
    console.log('connected as id ' + connection.threadId + '\n');
};





// Employees queries
addEmployee =  (firstName, LastName, roleID, managerID) => {
    console.log('Inserting a new employee...\n');
    const query =  connection.query(
        'INSERT INTO employees SET ?',
        {
            first_name: firstName,
            last_name: LastName,
            role_id: roleID,
            manager_id: managerID
        },
        function (err, res) {
            if (err) throw err;
            
            return console.log(res.affectedRows + ' employee inserted!\n');

            // updateEmployeeRole();
        }
    );
    // logs the actual query being run
    // console.log(query.sql);
};

updateEmployeeRole =  (id, roleID) => {
    console.log('Updating employee role...\n');

    const query =  connection.query(
        `UPDATE employees SET ? WHERE ?`,
        [
            { role_id: roleID },
            { id: id }
        ],
        function (err, res) {
            if (err) throw err;
            
            return console.log(res.affectedRows + ' employee role updated!\n');

            // readEmployees();
        }
    );
    // logs the actual query being run
    // console.log(query.sql);
};

readEmployees =  () => {
    console.log('Selecting all employees...\n');
    const query =  connection.query(
        `SELECT * from employees`,
        function (err, res) {
            if (err) throw err;

            return console.table(res);

            // addRole();
        }
    );
};



// Roles queries
addRole =  (title, salary, departmentID) => {
    console.log('Inserting a new role...\n');
    const query = connection.query(
        'INSERT INTO roles SET ?',
        {
            title: title,
            salary: salary,
            department_id: departmentID
        },
        function (err, res) {
            if (err) throw err;

            return console.log(res.affectedRows + ' role inserted!\n');

            // readRoles();
        }
    );
    // logs the actual query being run
    // console.log(query.sql);
};

readRoles =  () => {
    console.log('Selecting all roles...\n');
    const query = connection.query(
        `SELECT * from roles`,
        function (err, res) {
            if (err) throw err;
            
            return console.table(res);

            // addDepartment();
        }
    );
};


// Departments queries
addDepartment =  (name) => {
    console.log('Inserting a new department...\n');
    const query = connection.query(
        'INSERT INTO departments SET ?',
        {
            name: name
        },
        function (err, res) {
            if (err) throw err;
            
            return console.log(res.affectedRows + ' department inserted!\n');

            // readDepartments();
        }
    );
    // logs the actual query being run
    console.log(query.sql);
};

readDepartments =  () => {
    console.log('Selecting all departments...\n');
    const query = connection.query(
        `SELECT * from departments`,
        function (err, res) {
            if (err) throw err;
            
            return console.table(res);

            // endConnection();
        }
    );
};




endConnection =  () => {
     connection.end();
    console.log("connection ended")
    return "connection ended"
};






module.exports = {
    connection,

    startConnection,

    addEmployee,
    updateEmployeeRole,
    readEmployees,
    addRole,
    readRoles,
    addDepartment,
    readDepartments,

    endConnection
}