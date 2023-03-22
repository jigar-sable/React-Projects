import { useState } from "react";
import {
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Skeleton,
  Stack,
  Chip,
} from "@mui/material";
import IngredientsDialog from "./IngredientsDialog";

const RecipeItem = ({ recipe, isLoaded }) => {

  const { image, label, cuisineType, url } = recipe.recipe;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IngredientsDialog
        recipe={recipe}
        open={open}
        handleClose={handleClose}
      />

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          {!isLoaded ? (
            <Skeleton
              sx={{ height: 180 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <CardMedia
              component="img"
              alt="green iguana"
              height="180"
              image={image}
              draggable="false"
            />
          )}

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {!isLoaded ? (
                <Skeleton animation="wave" />
              ) : (
                <>{label.length > 20 ? label.substr(0, 15) + "..." : label}</>
              )}
            </Typography>
            {/* <Chip label={"Calories: "+calories.toFixed(2)} /> */}
            {!isLoaded ? (
              <Skeleton animation="wave" sx={{ height: 30 }} />
            ) : (
              <Chip label={"Cuisine: " + cuisineType} />
            )}
            {/* <Chip label={dietLabels[0]} /> */}
            {/* <Chip label={dishType[0]} /> */}
            <Stack spacing={1} sx={{ mt: 2 }}>
              {!isLoaded ? (
                <Skeleton animation="wave" sx={{ height: 40 }} />
              ) : (
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => setOpen(true)}
                >
                  Ingredients
                </Button>
              )}

              {!isLoaded ? (
                <Skeleton animation="wave" sx={{ height: 40 }} />
              ) : (
                <Button href={url} target="_blank" fullWidth variant="outlined">
                  Full Recipe
                </Button>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default RecipeItem;
