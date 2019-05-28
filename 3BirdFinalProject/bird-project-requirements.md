# Bird 

Create a Bird like app that allows users to rent out scooters

## Project requirements

* The project includes a client and a server
* The client represent the scooter itself 
* The server will service the scooters and users

## Actions the client must support:
* `register` - Registers a new scooter with the server
    * Receives a unique id
    * Stores it locally in a config file
* `rent <userID>` - The scooter is now rented 
    * This must preceed the `ride` command
    * A user can't rent more than one scooter at a time
    * Only one user can rent a scooter at a time
* `ride <lat> <long>` - The user is riding to this location
  * For simplicity sake, the speed will be fixed at 10 km/h
  * The scooter should report it's location and battery status every minute
  * The scooter loses 3 percent of battery for every km traveled
  * A scooter with less than 20% of battery left cannot be rented
  * After riding a total of 1000 km, the scooter needs to be treated using the `maintenance` command
  * After every minute of driving, there is a 1 in a 100 chance that the scooter will break, in which case it should report to the server and the user will not be charged for the ride
  * A broken scooter cannot be rented until a `maintenance` command is executed
  * If during a ride, the connection to the server is lost, the client should keep all the ride transmissions locally and transmit them upon restoring connection
* `release` - The user who rented the scooter has released it
  * Upon release, the user should be charged 1 NIS for each minute it was rented + 10 NIS flat fee
* `charge <userId>` - A user is charging the scooter
  * While charging, the scooter gains 1% of battery every second
  * When charging is done (or if terminated prematurely) the server should be notified with the new battery status. also, the user should be rewarded with 1 NIS per percent charged
* `maintenance` - Fixes a broken scooter
  * After 1,000 km of driving it is no longer rentable, until this command is executed
  * This should report to the server that the scooter was treated along with the time and location

General:
* Every command should send the scooter id to the server and make sure it is registered there
* Trying to execute a command with an unidentified id will be noted by the server in `report` table

**Technical:** The client will be written in Node

Here's an example of running a command
```cmd
~ $ scooter rent 14
```

## Server
The server is required to:
* Collect all the reports from the scooters and know all the information about scooters and users at all times
* Support every operation the Node client sends
* Store the data in a MySql database
* Support users operations (no client, using Postman directly)
  * Signup
  * Get monthly bill
  * Pay

**Technical:** 
* The server will implement a RestAPI using NodeJS, Express and MySql
* Use strict mode for every file (`'use strict'`)
* Use git for source control
* Make sure to have a clean looking code (indentation, camelCase, no commented code, etc..)
* Seperate the server to a few files by route
* Implementation should be scalable and be prepared for new requirements
