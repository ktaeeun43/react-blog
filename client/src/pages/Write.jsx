import React, { useState } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className='write'>
      <div className='content'>
        <input type="text" placeholder='Title' />
        <div className='editorContainer'>
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue}/>
        </div>
      </div>
      <div className='menu'>
        <div className='item'>
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
            <input style={{display: "none"}} type="file" id='file' name='' />
            <label className='file' htmlFor='file'>Upload Image</label>
            <div className='buttons'>
              <button>Save as a draft</button>
              <button>Update</button>
            </div>
        </div>
        <div className='item'>
          <h1>Category</h1>
          <div className='cat'> 
          <input type="radio" name='cat' value="study" id='study'/>
          <label htmlFor='study'>Study</label></div>
          <div className='cat'> 
          <input type="radio" name='cat' value="japanese" id='japanese'/>
          <label htmlFor='japanese'>Japanese</label></div>
          <div className='cat'> 
          <input type="radio" name='cat' value="technology" id='technology'/>
          <label htmlFor='technology'>Technology</label></div>
          <div className='cat'> 
          <input type="radio" name='cat' value="cinema" id='cinema'/>
          <label htmlFor='cinema'>Cinema</label></div>
          <div className='cat'> 
          <input type="radio" name='cat' value="cat" id='cat'/>
          <label htmlFor='cat'>Cat</label></div>
          <div className='cat'> 
          <input type="radio" name='cat' value="food" id='food'/>
          <label htmlFor='food'>Food</label>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Write