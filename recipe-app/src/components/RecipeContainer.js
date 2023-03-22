import React from "react";
import { Container, Grid } from "@mui/material";
import RecipeItem from "./RecipeItem";

const RecipeContainer = ({ recipeList, isLoaded }) => {
  //   const [recipeList, setRecipeList] = React.useState(recipes);

    // console.log(recipeList);

  //   const mealTypes = [...new Set(recipes.map((elem)=>(
  //     elem.recipe.mealType[0]
  //   ))), "All"]

  //   console.log(mealTypes)

  //   const filterRecipes = (mealType) => {
  //     if(mealType === "All") {
  //        setRecipeList(recipes)
  //       } else {
  //     const filteredRecipe = recipes.filter((elem) => {
  //       // console.log(elem)
  //       console.log(elem.recipe.mealType[0])
  //       return elem.recipe.mealType[0] === mealType
  //   });
  //     console.log(filteredRecipe);
  //     setRecipeList(filteredRecipe)
  // }
  // }

  return (
    <Container maxWidth="lg" sx={{ marginBottom: 6 }}>
      {/* {
            mealTypes.sort().map((mealType)=>(
              <Button variant="outlined" onClick={()=>{filterRecipes(mealType)}}>{mealType}</Button>
            ))
          } */}

      <Grid container spacing={4}>
        {recipeList.map((recipe, i) => (
          <RecipeItem recipe={recipe} isLoaded={isLoaded} key={i}/>
        ))}
      </Grid>
    </Container>
  );
};

export default RecipeContainer;
