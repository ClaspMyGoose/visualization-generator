import UploadForm from '../../components/upload-form/upload-form.component';
import { useNavigate } from 'react-router-dom';


const Home = () => {

  const nav = useNavigate(); 

  const testNav = () => {
    nav('/viz');
  } 

  return (
    <>
      <div>This is the Home page</div>
      <UploadForm />
      <button onClick={testNav}>Make sure routing is working!</button>
    </>
  )
}


export default Home; 