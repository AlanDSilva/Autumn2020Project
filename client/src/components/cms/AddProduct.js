import React, { useState } from "react";
import APIAddItems from '../../api/APIAddItems'
import { trackPromise } from 'react-promise-tracker';
// notification style
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function AddProduct(props) {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  toast.configure();

  function add(event) {
    event.preventDefault();

    // setup form data and configuration
    let formData = new FormData();
    formData.append("token", localStorage.getItem("tokenUser"));
    formData.append("name", name);
    formData.append("file", selectedFile);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    
    trackPromise(
    APIAddItems(formData, config) 
    .then( (results) => { 
      console.log(results)
      props.history.push(props.redirectPathOnSuccess);
      toast.success('added item successful')
    })
    .catch(error => console.log(error))
    );
  }
  return (
    <div style={{marginLeft: '20%', width: '60%'}}>
      {" "}
      <br />
      <br />
      <br />
      <br />
      <form onSubmit={add} encType="multipart/form-data">
        Item name:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        Picture :{" "}
        <input
          type="file"
          //value={selectedFile}
          onChange={(event) => {
            setSelectedFile(event.target.files[0]);
          }}
        />
        <br />
        Price:{" "}
        <input
          type="text"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <br />
        Item description:{" "}
        <input
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <br />
        Category:{" "}
        <input
          type="text"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}   