import React, { useState } from 'react'
import { Button, Typography, TextField, Paper, Container, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';

const AddContact = ({addContact}) => {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(name, email);
        enqueueSnackbar("Contact Added Successfully", { variant: "success" });
        navigate("/");
    }

    return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <Paper sx={{ padding: "2em 3em 4em 3em" }}>
        <Typography mb={3} variant="h5" gutterBottom component="div" align="center">Add New Contact</Typography>
        <Stack spacing={3}>
          <TextField onChange={(e)=>setName(e.target.value)} value={name} id="outlined-basic" label="Full Name" variant="outlined" required type="text" />
          <TextField onChange={(e)=>setEmail(e.target.value)} value={email} id="outlined-basic" label="Email" variant="outlined" required type="email"/>
          <Button type="submit" variant="contained" size="large">Save</Button>
        </Stack>
        </Paper>
        </form>
    </Container>
    )
}

export default AddContact
