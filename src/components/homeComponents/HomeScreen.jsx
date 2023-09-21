import React from 'react'
import AdBanner from './AdBanner'
import { useEffect } from 'react'
import axios from 'axios'
import RecipeContainer from './RecipeContainer'

const HomeScreen = () => {  
const recipesURL = 'https://recipes.devmountain.com'
const [recipes, setRecipes] = useState([])

  const getRecipes = () => {
    axios
        .get(`${recipesURL}/recipes`)
        .then((res) => {
            setRecipes(res.data)
            console.log(res.data)
        })
}

useEffect(() => {
    getRecipes()
},[])

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes} />
    </div>
  )
}

export default HomeScreen