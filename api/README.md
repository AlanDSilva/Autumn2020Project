<pre>
### POST /api/users
CREATES USER. 
config:  
{  
    headers: {    
        "content-type": "multipart/form-data",  
    }  
}<br/>
form data:<br/>
{<br/>
    username: String<br/>
    file: File<br/>
    password: String<br/>
}<br/>
json response:<br/>
{<br/>
    token: String<br/>
    username: String<br/>
    photo_url: String<br/>
}<br/>

### POST /api/login
LOGS USER In<br/>
request body:<br/>
{<br/>
    username: String<br/>
    password: String<br/>
}<br/>
json respnse:<br/>
{<br/>
    token: String<br/>
    username: String<br/>
    photo_url: String<br/>
}<br/>

### POST /api/items
ADD ITEM<br/>
config:<br/>
{<br/>
    headers: {<br/>
        "content-type": "multipart/form-data",<br/>
    }<br/>
}<br/>
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
</pre>


