import React from 'react'
import { Container, Button, Stack, Skeleton } from "@mui/material";

const Menu = ({ mealTypes, filterRecipes, isLoaded }) => {
  return (
    <Container maxWidth="sm" sx={{ my: 3 }}>
      <Stack direction="row" spacing={1}>
        {!isLoaded ? (
          <Skeleton animation="wave" sx={{ height: 50, width: 450 }} />
        ) : (
          mealTypes.sort().map((mealType, i) => (
            <Button
              variant="contained"
              onClick={() => {
                filterRecipes(mealType);
              }}
              key={i}
            >
              {mealType}
            </Button>
          ))
        )}
      </Stack>
    </Container>

  )
}

export default Menu
