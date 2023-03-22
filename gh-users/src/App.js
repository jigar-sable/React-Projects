import { Typography, Grid, Card, CardContent, CardMedia, CircularProgress, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const url = "https://api.github.com/users";
    await axios.get(url)
      .then((res) => (
        // console.log(res.data)
        setUsers(res.data)
      ))
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <Typography variant="h4" align="center" color="white" mt={4}>
        GitHub Users
      </Typography>

      <Grid sx={{ padding: 6 }} container justifyContent="center" spacing={4}>
        {
          users && (
            users.map((user) => {
              const { id, avatar_url, login, html_url } = user;
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                  <Card sx={{ maxWidth: "full" }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={avatar_url}
                      alt="profile avatar"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {login}
                      </Typography>
                      <Button href={html_url} target='_blank' variant="contained" fullWidth>Follow</Button>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })
          )
        }

        {
          !users && (
            <CircularProgress />
          )
        }

      </Grid>
    </>
  );
}

export default App;
