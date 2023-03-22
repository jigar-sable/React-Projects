import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import RecipeContainer from "./components/RecipeContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import { Typography, Container } from "@mui/material";
import Menu from "./components/Menu";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [recipes, setRecipes] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [recipeList, setRecipeList] = useState([]);
  const [mealTypes, setMealTypes] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  const getRecipes = async (search, healthLabel) => {
    setIsLoaded(false);
    const uri = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=beff2f47&app_key=${process.env.REACT_APP_API_KEY}&health=${healthLabel}`;
    try {
      await axios.get(uri).then((res) => {
        // console.log(res.data)
        setRecipes(res.data.hits);
        setRecipeList(res.data.hits);
        setMealTypes([
          ...new Set(res.data.hits.map((elem) => elem.recipe.mealType[0])),
          "All",
        ]);
        setIsLoaded(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const filterRecipes = (mealType) => {
    if (mealType === "All") {
      setRecipeList(recipes);
    } else {
      const filteredRecipe = recipes.filter((elem) => {
        // console.log(elem)
        // console.log(elem.recipe.mealType[0]);
        return elem.recipe.mealType[0] === mealType;
      });
      // console.log(filteredRecipe);
      setRecipeList(filteredRecipe);
    }
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      // background: {
      //   default: "#3805ad",
      //   paper: "#3805ad"
      // },
      // primary: {
      //   main: "#00FF00"
      // },
      // secondary: {
      //   main: "#00FF00"
      // },
      // text: {
      //   primary: "#000000",
      //   secondary: "#FFFFFF"
      // },
    }
  })

  useEffect(() => {
    getRecipes("pasta", "vegan");
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Searchbar getRecipes={getRecipes} />

      {!mealTypes && undefined}

      {mealTypes && (
        <Menu
          mealTypes={mealTypes}
          filterRecipes={filterRecipes}
          isLoaded={isLoaded}
        />
      )}

      {!recipes && (
        <Container maxWidth="sm">
          <Typography variant="h4" mt={8} align="center">
            Fetching some pasta recipes for you! 😋
          </Typography>
        </Container>
      )}

      {recipes && (
        <RecipeContainer
          recipeList={recipeList.length === 0 ? recipes : recipeList}
          isLoaded={isLoaded}
        />
      )}

    </ThemeProvider>
  );
}

export default App;
