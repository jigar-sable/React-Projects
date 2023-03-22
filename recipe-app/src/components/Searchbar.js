import { useState } from "react";
import { Container, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Searchbar = ({ getRecipes }) => {
  const [search, setSearch] = useState("Pasta");
  const [healthLabel, setHealthLabel] = useState("vegan");

  return (
    <Container maxWidth="sm" sx={{ my: 3 }}>
      <Stack direction="row" spacing={1}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Recipes.."
            inputProps={{ "aria-label": "search google maps" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={() => getRecipes(search, healthLabel)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        {/* <Stack direction="row" spacing={2}>
        <TextField fullWidth variant="outlined" label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <Button variant="contained" onClick={()=>getRecipes(search)}>Search</Button>
        </Stack> */}

        <Box component={Paper}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Health Label</InputLabel>
            <Select
              value={healthLabel}
              label="Type"
              onChange={(e) => setHealthLabel(e.target.value)}
            >
              <MenuItem value="vegan">Vegan</MenuItem>
              <MenuItem value="vegetarian">Vegetarian</MenuItem>
              <MenuItem value="paleo">Paleo</MenuItem>
              <MenuItem value="dairy-free">Dairy-Free</MenuItem>
              <MenuItem value="gluten-free">Gluten-Free</MenuItem>
              <MenuItem value="wheat-free">Wheat-Free</MenuItem>
              <MenuItem value="low-sugar">Low-Sugar</MenuItem>
              <MenuItem value="egg-free">Egg-Free</MenuItem>
              <MenuItem value="peanut-free">Peanut-Free</MenuItem>
              <MenuItem value="soy-free">Soy-Free</MenuItem>
              <MenuItem value="fish-free">Fish-Free</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Container>
  );
};

export default Searchbar;
