import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Divider, Button, Typography, Stack } from "@mui/material";

const IngredientsDialog = ({ recipe, handleClose, open }) => {

  const { label, ingredients, url } = recipe.recipe;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="dialog-title">
        <Stack direction="row">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {label.length > 25 ? label.substr(0, 25) + "..." : label}
          </Typography>
          <Button onClick={handleClose} variant="contained" color="error">
            Close
          </Button>
        </Stack>
      </DialogTitle>
      <Divider />
      {/* <DialogContent> */}
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ingredient</TableCell>
              <TableCell align="right">Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ingredients.map((ingredient, i) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={i}
              >
                <TableCell component="th" scope="row">
                  {ingredient.text}
                </TableCell>
                <TableCell align="right">
                  {ingredient.weight.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </DialogContent> */}
      <Divider />
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(url)}
        >
          See More
        </Button>
        {/* <Button onClick={handleClose} variant="outlined" color="error">Close</Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default IngredientsDialog;
