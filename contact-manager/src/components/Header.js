import { Button, Box, AppBar, Toolbar, Typography, Switch, FormControlLabel } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

const Header = ({toggleTheme}) => {

    return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" gutterBottom sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>Contact Manager</Link>
          </Typography>

          <Button sx={{ marginRight: 2 }} component={Link} to="/add" color="inherit" variant="outlined" startIcon={<AddCircleIcon />}>
          Add Contact
          </Button>

          <FormControlLabel
          control={<Switch onChange={()=>toggleTheme()}></Switch>}
          label="Dark Mode"
          />
          
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header
