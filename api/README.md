### POST /api/users

<pre>
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

</pre>

### POST /api/login

<pre>
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

</pre>

### POST /api/items

<pre>
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

</pre>

### GET /api/items

<pre>
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

</pre>

### GET /api/items/:id

<pre>
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

</pre>

### DELETE /api/items/:id

<pre>
DELETES ONE ITEM BY ITS ID
request params: 
{
    id: String
}
json respnse:
{
    success: "item succesfully deleted" 
}
</pre>

### POST /api/history

ADDS ONE PURCHASE

<pre>
request body:
{
    token: String,
    items: [String], //An array of strings with format ["item1 : price1", "item2 : price2", ...]
    date: String,
    price: Float,
}
json response:
{
    "id": String,
    "user_id": "String",
    "items": ["String"],
    "p_date": String,
    "price": Float
}
</pre>

### GET /api/history/

GETS USER'S HISTORY
request body: {
token: String
}

json response: [
{  
 "id": String,
"user_id": "String",
"items": ["String"],
"p_date": String,
"price": Float
}, ...
]
