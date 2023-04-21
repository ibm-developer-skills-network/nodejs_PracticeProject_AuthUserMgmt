# Friends API

This is a simple RESTful API for managing friends. It allows you to:

- GET a list of all friends
- GET a single friend by email ID
- POST a new friend
- PUT update a friend's details
- DELETE a friend

By default, the API server will run on `http://localhost:5000`.

## API Reference
```
```
### GET a list of all friends

```http
GET /friends

curl http://localhost:5000/friends
```
#### Response:
```
{
    "johnsmith@gamil.com": {
        "firstName": "John",
        "lastName": "Doe",
        "DOB": "22-12-1990"
    },
    "annasmith@gamil.com": {
        "firstName": "Anna",
        "lastName": "smith",
        "DOB": "02-07-1983"
    },
    "peterjones@gamil.com": {
        "firstName": "Peter",
        "lastName": "Jones",
        "DOB": "21-03-1989"
    }
}
```
### GET a single friend by email ID
```
GET /friends/:email

curl http://localhost:5000/friends/johnsmith@gamil.com
```
#### Response:
```
{
    "firstName": "John",
    "lastName": "Doe",
    "DOB": "22-12-1990"
}
```
## POST a new friend
```
POST /friends

curl -X POST -H "Content-Type: application/json" -d '{"email": "janesmith@gamil.com", "friend": {"firstName": "Jane", "lastName": "Smith", "DOB": "11-05-1995"}}' http://localhost:5000/friends
```
#### Response:
```
Friend added successfully
```
## PUT update a friend's details
```
PUT /friends/:email

curl -X PUT -H "Content-Type: application/json" -d '{"friend": {"firstName": "John", "lastName": "Smith", "DOB": "22-12-1990"}}' http://localhost:5000/friends/johnsmith@gamil.com
```
#### Response:
```
Friend updated successfully
```
## DELETE a friend
```
DELETE /friends/:email

curl -X DELETE http://localhost:5000/friends/peterjones@gamil.com
```
#### Response:
```
Friend deleted successfully
```
