import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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


const AddProject = () => {

    const navigate = useNavigate();
    const toast = useToast();

    const [name, setName] = useState("");
    const [view, setView] = useState("");
    const [code, setCode] = useState("");
    const [preview, setPreview] = useState("");

    const [loading, setLoading] = useState(false);

    const auth = async () => {
        const token = localStorage.getItem('jwtoken');

        await axios.post('/api/auth', { token })
            .then(res => {
                //   console.log(res.data);
                if (!res.data.auth) {
                    localStorage.removeItem('jwtoken');
                    navigate('/admin/login')
                }
            })
    }

    useEffect(() => {
        auth();
        // eslint-disable-next-line
    }, [])

    const uploadImage = async () => {

        const data = new FormData();
        data.append('file', preview)
        data.append('upload_preset', 'react-projects')

        await axios.post('https://api.cloudinary.com/v1_1/lifecodes/image/upload', data)
            .then((res) => {
                addProject(res.data.secure_url);
            }).catch((err) => {
                console.log(err)
            })
    }

    const addProject = async (imgURL) => {
        const token = localStorage.getItem('jwtoken');

        await axios.post('/api/addproject', {
            name,
            code,
            view,
            imgURL,
            token
        }).then((res) => {
            if (res.data.added) {
                toast({
                    title: 'Project Added',
                    status: 'success',
                    duration: 3000,
                });
                navigate('/admin/panel')
            } else {
                alert('Project Submission Failed!')
            }
        })
    }

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        uploadImage();
    }

    return (
        <Flex
            minH={'90vh'}
            align={'center'}
            justify={'center'}
            direction={'column'}
            gap={6}
            bg={useColorModeValue('gray.200', 'gray.800')}>

            <Heading fontSize={'3xl'}>Add New Project</Heading>

            <Container maxW={'md'}>

                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    mb={6}
                    p={8}>
                    <VStack spacing={4} as='form' onSubmit={(e) => handleSubmit(e)}>
                        <FormControl id="name" isRequired>
                            <FormLabel>Project Name</FormLabel>
                            <Input name='name' type="text" placeholder='Project One' value={name} onChange={(e) => setName(e.target.value)} />
                        </FormControl>

                        <FormControl id="url" isRequired>
                            <FormLabel>Preview URL</FormLabel>
                            <Input name='view' type="url" placeholder='https://project-preview.com' value={view} onChange={(e) => setView(e.target.value)} />
                        </FormControl>

                        <FormControl id="code" isRequired>
                            <FormLabel>Code URL</FormLabel>
                            <Input name='code' type="url" placeholder='https://github.com' value={code} onChange={(e) => setCode(e.target.value)} />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel>Preview Image</FormLabel>
                            <Input name='preview' id="fileInput" type="file" h={'full'} p={2} onChange={(e) => setPreview(e.target.files[0])} accept="image/*" />
                        </FormControl>

                        {
                            loading ?
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    shadow={'lg'}
                                    bgGradient="linear(to-r, purple.500,blue.600)"
                                    _hover={{
                                        bgGradient: 'linear(to-r, blue.500,purple.600)',
                                        boxShadow: 'xl',
                                    }}
                                    w={'full'}
                                    type='submit'
                                    isLoading
                                    loadingText='Submitting'
                                >
                                    Add Project
                                </Button>
                                :
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    shadow={'lg'}
                                    bgGradient="linear(to-r, purple.500,blue.600)"
                                    _hover={{
                                        bgGradient: 'linear(to-r, blue.500,purple.600)',
                                        boxShadow: 'xl',
                                    }}
                                    w={'full'}
                                    type='submit'
                                >
                                    Add Project
                                </Button>
                        }

                    </VStack>
                </Box>

            </Container>

        </Flex>
    )
}

export default AddProject
