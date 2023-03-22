import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Switch,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const Header = ({ toggleTheme }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LocalDiningIcon />
          <Typography variant="h6" component="div" ml={0.5} sx={{ flexGrow: 1 }}>
            Recipes App
          </Typography>

          {/* <FormControlLabel
          control={<Switch onChange={()=>toggleTheme()}></Switch>}
          label="Dark Mode"
          /> */}

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            sx={{ marginRight: 2 }}
          >
            <LightModeIcon />
            <Switch onChange={() => toggleTheme()}></Switch>
            <DarkModeIcon />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
