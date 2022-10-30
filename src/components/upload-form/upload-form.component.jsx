import { useState } from 'react';

const UploadForm = () => {

  const [file, setFile] = useState(null); 

  const submitFile = async (e) => {
    e.preventDefault();
    
    const data = new FormData(); 
    data.append('data', file); 

    await fetch('http://127.0.0.1:8080/upload', {
      method: 'post',
      body: data
    }).then((data) => data.text())

  }

  // TODO need to lock the submit button + need a spinner while we are "uploading the file"

  return (

  <div className="upload-form-container">
    <form onSubmit={submitFile} encType='multipart/form-data'>
      <input type='file' name='data' onChange={e => {setFile(e.target.files[0])}} />
      <button type='submit'>Upload</button>
    </form>
  </div>

)};


export default UploadForm

