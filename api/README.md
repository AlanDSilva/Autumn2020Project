### POST /api/users
CREATES USER
config:
{
    headers: {
        "content-type": "multipart/form-data",
    }
}
form data:
{
    username: String
    file: File
    password: String
}
json response:
{
    token: String
    username: String
    photo_url: String
}

### POST /api/login
LOGS USER In
request body:
{
    username: String
    password: String
}
json respnse:
{
    token: String
    username: String
    photo_url: String
}

### POST /api/items
ADD ITEM
config:
{
    headers: {
        "content-type": "multipart/form-data",
    }
}
form data:
{
    token: String,
    name: String,
    file: File,
    price: Float,
    description: String,
    category: String,
}
json respnse:
[
    {
        id: String
        user_id: String
        name: String
        photo_url: String
        price: String
        description: String
        category: String
    }
]

### GET /api/items
GETS LIST OF ALL ITEMS
json respnse:
[
    {
        id: String
        user_id: String
        name: String
        photo_url: String
        price: String
        description: String
        category: String
    }, ...
]

### GET /api/items/:id
GETS ONE ITEM BY ITS ID
request params: 
{
    id: String
}
json respnse:
[
    {
        id: String
        user_id: String
        name: String
        photo_url: String
        price: String
        description: String
        category: String
    }
]

### DELETE /api/items/:id
DELETES ONE ITEM BY ITS ID
request params: 
{
    id: String
}
json respnse:
{
    success: "item succesfully deleted" 
}



