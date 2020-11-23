import React from 'react';
import axios from 'axios';
import constants from '../constants.json';

export default function AddProduct(props) {
    function add(event) {
      event.preventDefault();
      // get value from the form
      var name = event.target['name'].value;
      var picture = event.target['picture'].value;
      var price = event.target['price'].value;
      var description = event.target['description'].value;
      var category = event.target['category'].value;
  
      axios.post(constants.baseAddress +'/api/items', {
            name,
            picture,
            price,
            description,
            category
      })
      .then(function (response) {
            props.history.push(props.redirectPathOnSuccess);
            console.log("success");
      })
      .catch(function (error) {
            console.log(error);
      });
      } 
      return (
          <div> <br/><br/><br/><br/>
              <form onSubmit={ add }>
                  Item name: <input type="text" name="name"/><br />
                  Picture URL: <input type="text" name="picture"/><br/>
                  Price: <input type="text" name="price"/><br/>
                  Item description: <input type="text" name="description"/><br/>
                  Category: <input type="text" name="category"/><br/>
                 <button type="submit" value="submit">Submit</button>
              </form>
          </div>
        );
  }