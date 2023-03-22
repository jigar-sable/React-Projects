import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
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

const EditProject = () => {

    const navigate = useNavigate();
    const params = useParams();
    const toast = useToast();

    const [name, setName] = useState("");
    const [view, setView] = useState("");
    const [code, setCode] = useState("");
    const [preview, setPreview] = useState("");

    const [loading, setLoading] = useState(false);

    const getProjectDetails = async () => {
        await axios.get(`/api/project/${params.id}`)
            .then((res) => {
                // console.log(res.data)
                const { name, view, code } = res.data.project;
                setName(name);
                setView(view);
                setCode(code);
            })
    }

    const auth = async () => {
        const token = localStorage.getItem('jwtoken');

        await axios.post('/api/auth', { token })
            .then(res => {
                if (!res.data.auth) {
                    localStorage.removeItem('jwtoken');
                    navigate('/admin/login')
                }
            })
    }

    useEffect(() => {
        auth();
        getProjectDetails();
        // eslint-disable-next-line
    }, [])

    const uploadImage = async () => {

        const data = new FormData();
        data.append('file', preview)
        data.append('upload_preset', 'react-projects')

        await axios.post('https://api.cloudinary.com/v1_1/lifecodes/image/upload', data)
            .then((res) => {
                updateProject(res.data.secure_url)
            }).catch((err) => {
                console.log(err)
            })
    }

    const updateProject = async (imgURL) => {
        const token = localStorage.getItem('jwtoken');

        await axios.put(`/api/project/${params.id}`, {
            name,
            code,
            view,
            imgURL,
            token
        }).then((res) => {
            if (res.data.updated) {
                toast({
                    title: 'Project Updated',
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

            <Heading fontSize={'3xl'}>Edit Project</Heading>

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
                                    loadingText='Updating'
                                >
                                    Update Project
                                </Button> :
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
                                    Update Project
                                </Button>
                        }
                    </VStack>
                </Box>

            </Container>

        </Flex>
    )
}

export default EditProject
