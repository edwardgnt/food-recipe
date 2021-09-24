import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const [query, setquery] = useState('');
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan")

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=67d9a479&app_key=038cbc7baab18218091e6bca8a60e9b6`;

const getRecipes = async () => {
  var result = await Axios.get(url);
  setrecipes(result.data.hits);
  console.log(result.data);
}

const onSubmit = (e) => {
  e.preventDefault();
  getRecipes();//
}

  return (
    <div className="app">
      <h1>Food Recipes</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input className="app_input" type="text" placeholder="Enter ingredient" value={query} onChange={(e) => setquery(e.target.value) } />
        <input className="app_submit" type="submit" value="Search" />
      </form>

      <div className="app_recipes">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;



