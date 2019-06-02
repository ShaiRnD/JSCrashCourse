## demo of bird cli: TODO go through this

starting with register
```
~ $ node birdClient
bird> register
New bird scooter registered (scooterID: 12345)

bird-12345> rent 5
bird was rented by user 5.

bird-12345-5> release
bird was released.

bird-12345> rent 6
Failed! user does not exist.

bird-12345> rent 4
bird was rented by user 4.

bird-12345-4> ride 80 20
location 0:0 battery:90% totalKm: 954km
location 20:5 battery:89% totalKm: 953km
.
.
.
location 50:13 battery:88% totalKm: 952km
location 80:20 battery:87% totalKm: 951km

bird-12345-4> release
bird was released

bird-12345> charge 5
scooter is being charged by user 5
charging: 88%
charging: 89%
charging: 90%
charging: 91%
charging: 92%
charging: 93%
charging: 94%
charging: 95%
charging: 96%
charging: 97%
charging: 98%
charging: 99%
charging: 100%
scooter is fully charged

bird-12345> exit
```

start without register
```
~ $ node birdClient
bird> start 12345
bird-12345> rent 3
bird-12345-3> release
bird-12345> exit 
```