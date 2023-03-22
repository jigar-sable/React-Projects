import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const Contact = ({ contactsArr, deleteContact }) => {
    return (
        <TableContainer sx={{ marginTop: 2 }}>
            <Table aria-label="simple table">

                <TableHead>
                    <TableRow>
                        <TableCell>Sr. No.</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {contactsArr.length === 0 ? (
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{'No Contacts Found!'}</TableCell>
                        </TableRow>
                    ) : (
                        contactsArr.map((contact, i) => (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={contact.id}>
                                <TableCell component="th" scope="row">{i + 1}</TableCell>
                                <TableCell>{contact.name}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>
                                    <Button onClick={() => deleteContact(contact.id)} variant="contained" color="error">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    )
                    }

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Contact
