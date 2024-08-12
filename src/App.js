
import './App.css';
import Meal from './Components/Meal';
import {Routes,Route} from 'react-router-dom'
import RecipeDetail from './Components/RecipeDetail';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Meal />}></Route>
        <Route exact path="/:recipeid" element={<RecipeDetail />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
