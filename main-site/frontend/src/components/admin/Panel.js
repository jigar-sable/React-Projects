import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as ReachLink } from "react-router-dom";
import axios from 'axios';
import Project from './Project';
import {
    Container,
    Table,
    Thead,
    Tr,
    Td,
    Text,
    Th,
    Tbody,
    Box,
    useColorModeValue,
    Button,
    useToast,
    VStack,
    HStack,
    Input,
} from '@chakra-ui/react';
import { MdNoteAdd } from 'react-icons/md';

const Panel = () => {

    const navigate = useNavigate();
    const toast = useToast();

    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");

    const auth = async () => {
        const token = localStorage.getItem('jwtoken');

        await axios.post('/api/auth', { token })
            .then((res) => {
                if (!res.data.auth) {
                    localStorage.removeItem('jwtoken');
                    navigate('/admin/login')
                }
            })
    }

    const getProjects = async () => {
        await axios.get('/api/projects')
            .then((res) => {
                setProjects(res.data.projects);
                // console.log(res.data.projects)
            })
    }

    const deleteProject = async (id) => {
        const token = localStorage.getItem('jwtoken');

        await axios.delete(`/api/project/${id}`, { data: { token } })
            .then((res) => {
                // console.log(res)
                if (res.data.deleted) {
                    setProjects(projects.filter((project) => project._id !== id));
                    toast({
                        title: 'Deleted Successfully',
                        status: 'success',
                        duration: 3000,
                    });
                }
            })
    }

    useEffect(() => {
        auth();
        getProjects();
        // eslint-disable-next-line
    }, [])

    const filterProjects = projects.filter((project) => (
        project.name.toLowerCase().includes(search.toLowerCase())
    ))

    return (
        <>
            <Container maxW={'5xl'} py={6} minH={'100vh'}>
                <VStack spacing={10}>
                    <HStack w={'full'} spacing={5}>
                        <Input
                            variant={'filled'}
                            placeholder={'Search Project..'}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        >
                        </Input>
                        <Button as={ReachLink} to="/admin/add" leftIcon={<MdNoteAdd />} colorScheme={'blue'}>Add Project</Button>
                    </HStack>

                    <Box
                        border={'1px'}
                        borderColor={useColorModeValue('gray.200', 'gray.600')}
                        borderRadius={'md'}
                        w={'full'}>
                        <Table variant={'striped'}
                            colorScheme={'gray'}
                        >
                            <Thead>
                                <Tr>
                                    <Th>Preview</Th>
                                    <Th>Title</Th>
                                    <Th>View</Th>
                                    <Th>Code</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    filterProjects.length === 0 ?
                                        <Tr>
                                            <Td colSpan={5}>
                                                <Text>No Projects Found!</Text>
                                            </Td>
                                        </Tr>
                                        :
                                        filterProjects.map((project) => {
                                            return (
                                                <Project
                                                    {...project}
                                                    deleteProject={deleteProject}
                                                    key={project._id}
                                                />
                                            )
                                        }).reverse()
                                }

                            </Tbody>
                        </Table>
                    </Box>
                </VStack>
            </Container>
        </>
    )
}

export default Panel
