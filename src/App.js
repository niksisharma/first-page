import React, { useState } from 'react';
import './App.css';
import PostList from './PostList';
import axios from 'axios';


function App() {
  const [formval, setformval] = useState([]);
  function getval(e) {
    let name = e.target.name;
    let val = e.target.value;
    setformval({ ...formval, [name]: val })
  }
  console.log(process.env.React_App_serverurl);

  const formsubmit = async (e) => {
    // e.preventDefault();
    // alert("HI");
    console.log(formval)
    await axios({
      method:'post',
      url:process.env.React_App_serverurl+"posts", data:formval,
    headers: { 
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'*'
    }})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const welcomeText = "Hello Everyone!";


  return (

    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="/"><b>Nikita's Movie Collection</b></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span class="nav-link">Launch Post Form</span>
            </li>
          </ul>
        </div>
      </nav>
      <br></br>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Post Form</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onSubmit={formsubmit} className='form'>
                <label className="my-4" htmlFor='director'>Director Name<input type="text" id="author" placeholder="Enter Author name" name="author" className='form-control' onChange={getval} /></label>
                <label className="my-4" htmlFor='title'>Title<input type="text" id="title" placeholder="Enter Title" name="title" className='form-control' onChange={getval} /></label>

                <label className="my-4" htmlFor='content'>Description<input type="text" id="content" placeholder="Enter description" className='form-control' name="content" onChange={getval} /></label>
                <input type="submit" className='btn btn-primary'></input>
              </form>

            </div>
          </div>
        </div>
      </div>



      <div className='container'>
        <PostList title={welcomeText} description="Hello world"></PostList>

      </div>
    </div>
  );
}

export default App;