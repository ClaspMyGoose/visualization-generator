

const UploadForm = () => {


  const submitFile = async (e) => {
    e.preventDefault();

    const uploadedFile = await fetch('http://127.0.0.1:8080/upload', {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((data) => data.text())

    console.log(uploadedFile); 
  }


  return (

  <div className="upload-form-container">
    <form onSubmit={submitFile}>
      <input type='file'/>
      <button type='submit'>Upload</button>
    </form>
  </div>

)};


export default UploadForm

