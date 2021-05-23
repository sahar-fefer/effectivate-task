# Welcome To My Effectivate Task!
In this task, I was required to build a responsive HTML template form with validations.
The goal is to write a coherent code with a meaningful class name, reusable styles, etc.

The main challenge I faced was a lack of time.
I required to plan the work and divide it into parts and be able to work late and fast.

During the work, I deepened my knowledge of react-hooks, and start learn how to write tests for the program.

## Thoughts on data storage
In the task description, there is no reference to the way in which we will keep the information that the client puts into the form
I was thinking what is the best way to store the information.

#### The first option was: json file within the file system.
The advantage is that it is a simple file that can be used as an example of how I would store my information in a database and I could save multiple users at the same time.
The downside is that it is an exposed file so on a site where information needs to be stored I would never use a json file to store information, but transfer the information to the server and the server keeps the information securely in the database.

#### The second option was: lochal storage.
The advantage is that it is a small object that refers to the specific client of this computer, that way I can know if it has already filled out the form in the past and what the details were.
The downside is that I can not create a situation where my local storage will hold multiple users at the same time, always only the user to whom the computer belongs.

#### The third option was: airtable.
The huge advantage of the airtable is tha airtable is a simple and convenient database that runs in the cloud and I can connect directly to my client side.
This way I have also achieved the capabilities of multiple user management, higher security level, no need for a server.
The downside is that this required work is bigger, I didn't get to work before in airtable so I will have to spend learning time as well.


# Install and run the project
To run the project you need to download it (the green button),
After the project is downloaded to the computer, the following command must be written on the command line: "npm install"/"npm i".
Then to start the project you have to write the following line: "npm start"