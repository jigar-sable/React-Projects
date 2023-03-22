import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { uuid } from 'uuidv4';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { useSnackbar } from 'notistack';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const { enqueueSnackbar } = useSnackbar();

  let contactList;
  (localStorage.getItem('contacts') === null) ?
  contactList = [] : contactList = JSON.parse(localStorage.getItem('contacts'));
  
  const [contactsArr, setContactsArr] = useState(contactList);  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addContact = (name, email) => {
    const newContact = {id : uuid(), name, email};
    // console.log(newContact);
    setContactsArr([...contactsArr, newContact]);
    // console.log(contactsArr);
  }

  const deleteContact = (id) => {
    setContactsArr(contactsArr.filter((contact)=> contact.id !== id ));
    enqueueSnackbar("Contact Deleted Successfully", { variant: "error" })
  }

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contactsArr));
  }, [contactsArr])


  const searchKeyword = (e) => {
    const val = e.target.value;
    setSearchTerm(val);
    if(val !== "") {
    const resultArr = contactsArr.filter((contact) => {
      return Object.values(contact).join(" ").toLowerCase().includes(val.toLowerCase())
    })
    setSearchResults(resultArr);
    } else {
      setSearchResults(contactsArr);
    }
  }

  
const theme = createTheme({
  palette: {
    mode: darkMode ? "dark" : "light"
  }
})

const toggleTheme = () => {
  setDarkMode(!darkMode);
}

  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
       <Header toggleTheme={toggleTheme} />
       
      <Routes>
        <Route path="/" exact element={<ContactList contactsArr={searchTerm.length > 0 ? searchResults : contactsArr} deleteContact={deleteContact} searchTerm={searchTerm} searchKeyword={searchKeyword} />}></Route>
        <Route path="/add" exact element={<AddContact addContact={addContact}/>}></Route>
      </Routes>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
