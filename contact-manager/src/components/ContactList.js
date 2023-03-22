import { Container, Paper, TextField } from '@mui/material';
import Contact from './Contact';

const ContactList = ({contactsArr, deleteContact, searchContact, searchTerm, searchKeyword}) => {

    // const [search, setSearch] = useState("");
    // const inputElem = useRef("");

    // const setSearchTerm = () => {
        // console.log(inputElem.current.value);
    //     searchKeyword(inputElem.current.value);
    // }

    return (
        <>
        <Container maxWidth="md" sx={{ marginTop: 1, marginBottom: 5 }}>
        <Paper sx={{ padding: "1em 3em" }}>
        <TextField /* inputRef={inputElem} */ value={searchTerm} onChange={(e)=>searchKeyword(e)} id="outlined-basic" label="Search Contact" variant="outlined" fullWidth />

        {/* <Stack direction="row" spacing={2}>
        <TextField onChange={(e)=> setSearch(e.target.value)} value={search} id="outlined-basic" label="Search Contact" variant="outlined" fullWidth />
        <Button onClick={()=>searchContact(search)} variant="contained">Search</Button>
        </Stack> */}

        <Contact contactsArr={contactsArr} deleteContact={deleteContact} />

        </Paper>
        </Container>
        </>
    )
}

export default ContactList

