# employee-manager

    

## Table of Contents 


* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
    
    

## Description 

This is a simple node.js command line tool for viewing and managing the departments, roles, and employees in a company.



## Installation

To install and use this app will require having Node.js and mySQL installed on your machine.To install this project, first navigate to or create the folder you will clone the project into. Then clone the project from https://github.com/KingPogona/employee-manager by clicking the code button and then copy the address. Next go to your terminal and make sure you are in the folder you want to clone the project to. Type git clone and then paste the url you just copied then hit return. Now type 'npm install' and hit return to download dependencies. Alternatively, you can you github desktop or you can download the zip from the same address and unzip it to the desired folder. 

This project will require a database to use. After creating one, use the schema file located in employee-manager/db/shema.sql to set up the tables that this project will use. For now, it is neccessary to go into the queries.js file and enter in the name of the database as well as your mySQL password manualy. (This may be a setting in the program in the future.)
    

    
## Usage 

After installing the app, navigate to the root folder 'employee-manager' in your terminal. Next, type 'node index" followed by hitting enter. This will run the program and provide a list of prompts. From here you can view all of the departments, roles, and employees that are in the systems database. You can also add new departments, roles, and employees to the database and edit the role of existing employees. To terminate the program click quit.
    
    

## Credits

* KingPogona - [https://github.com/KingPogona](https://github.com/KingPogona)
    


## Questions

If you have any questions please feel free to contact me at aacpogona@me.com.


## Walkthrough Video Link

[https://drive.google.com/file/d/1boHpVk-XDCUW6d9M5iOYezOkZERQZI85/view](https://drive.google.com/file/d/1boHpVk-XDCUW6d9M5iOYezOkZERQZI85/view)

Sorry for the audio quality. I didn't realize untill later that my mic was not turned on so it just used the built in mic. You may also notice in the video some manager ids of 0. those were manually entered during testing and should not occur when actually using the command line. 

Eventually this might be updated to use selectable text options instead of having to know wich ids you want to use. This presents some of its own issues when there are tons of entries in the database so I am not sure which I prefer. Odds are that I will update it to just be a list of options as I dont see someone using this with many people.

    
