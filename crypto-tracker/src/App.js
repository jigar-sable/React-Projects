import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, VStack, Spinner } from '@chakra-ui/react';
import Header from './components/Header'
import Searchbar from './components/Searchbar';
import Cointable from './components/Cointable';

function App() {

  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");
  const [loaded, setLoaded] = useState(false);

  const getCoins = async () => {
    const uri = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    await axios.get(uri)
      .then(res => {
        setCoins(res.data);
        // console.log(res.data);
        setLoaded(true);
      })
  }

  useEffect(() => {
    getCoins();
  }, [])

  const filterCoins = coins.filter((coin) => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <>
      <Header />

      <Container maxW={'5xl'} py={6}>
        <VStack spacing={10}>
          <Searchbar search={search} setSearch={setSearch} />
          {
            !loaded ? (
              <Spinner
                thickness='4px'
                speed='0.5s'
                emptyColor='gray.600'
                color='purple.500'
                size='xl'
              />
            ) : (
              <Cointable coins={filterCoins} />
            )
          }
        </VStack>
      </Container>

    </>
  );
}

export default App;
