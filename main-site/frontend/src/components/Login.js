import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Heading,
  Container,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';


const Login = () => {

  const toast = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {
    await axios.post('/api/login', { email, password }).then((res) => {
      // console.log(res.data.email);
      if (!res.data.login) {
        toast({
          title: 'Invalid Credentials!',
          status: 'error',
          duration: 3000,
        })
      } else {
        localStorage.setItem('jwtoken', res.data.token);
        toast({
          title: 'Login Successfully',
          status: 'success',
          duration: 3000,
        });

        navigate('/admin/panel')

      }
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  }

  const auth = async (token) => {
    await axios.post('/api/auth', { token })
      .then((res) => {
        if (res.data.auth) {
          navigate('/admin/panel')
        }
      })
  }

  useEffect(() => {
    let token = localStorage.getItem('jwtoken');
    auth(token);
    // eslint-disable-next-line
  }, [])

  return (
    <Flex
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      direction={'column'}
      gap={6}
      bg={useColorModeValue('gray.200', 'gray.800')}>
      <Heading fontSize={'3xl'}>Sign in to your account</Heading>
      <Container maxW={'md'}>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>

          <VStack spacing={4} as="form" onSubmit={(e) => handleLogin(e)} method='post'>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>

            <Button
              type="submit"
              bg={'blue.400'}
              color={'white'}
              w={'full'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign in
            </Button>

          </VStack>

        </Box>

      </Container>

    </Flex>
  )
}

export default Login
