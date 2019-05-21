# Detailed API

## Scooter
```http
POST /scooters/register
```
Registers a new scooter in the server. this scooter can now be rented
* Response - The scooter id

```http
POST /scooters/:id/rent
```
Rents a scooter with these conditions:
* The scooter is not already rented
* The scooter is not malfunctioned
* The battery is at least 20%
* The user hasn't already rented a different scooter

Data:  
* Body parameters: userId
* Response - rentId or error message

```http
POST /scooters/:id/position
```
Update the server with the scooter position

* Body parameters: lat, long, battery
* Response: status 200 or error

```http
POST /scooters/:id/release
```
Releases a scooter, allowing it to be rented again

* Body parameters: userId
* Response: status 200 or error

```http
GET /scooters/:id
```
Returns the scooter details

```http
GET /scooters/:id/history
```
Returns the scooter's rent history

## User

```http
POST /users/signup
```
Signs up a user. only signed up users are able to rent a scooter

* Request parameters: name, email, address
* Response: the user id or error if email exists

```http
GET /users/:id
```
Returns the user data 

```http
GET /users/:id/history
```
Returns the user's rent history

# Database

Tables:
* scooters - id, totalKm, operational, lat, long, battery
* treatments - id, scooterId, date, lat, long
* users - id, name, address, creditCardNumber, balance, signupDate
* payments - userId, sum, date
* rents - userId, scooterId, startDate, endDate, startLat, endLat, startLong, endLong, distance
* reports - id, battery, lat, long, date, command

Editors note - This design is a suggestion and may not answer all of the project's requirments, \
 but is a good base for summering this course. if you feel like implementing more requirments, by all means go ahead :)
