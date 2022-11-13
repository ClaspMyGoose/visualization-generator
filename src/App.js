import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Home from './routes/home/home.component'; 
import VisualizationGenerator from './routes/viz-generator/viz-generator.component';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path='/viz' element={<VisualizationGenerator />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
