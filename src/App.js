
import './App.css';
import Meal from './Components/Meal';
import {Routes,Route} from 'react-router-dom'
import RecipeDetail from './Components/RecipeDetail';
import ProductList from './Components/ProductList';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Meal />}></Route>
        <Route exact path="/:recipeid" element={<RecipeDetail />}></Route>
      </Routes>
      {/* <ProductList /> */}
    </div>
  );
}

export default App;
