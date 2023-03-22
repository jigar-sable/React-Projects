import { useEffect, useState } from 'react';
import Project from './Project';
import axios from 'axios';
import {
    Text,
    Heading,
    Container,
    Grid,
    useColorModeValue
} from '@chakra-ui/react';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        await axios.get('/api/projects')
            .then((res) => {
                setProjects(res.data.projects);
            })
    }

    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, [])

    return (
        <Container
            maxW={'full'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Container maxW={'6xl'} pt={2}
            >
                <Heading
                    textAlign={'center'}
                    fontSize={{ base: '3xl', sm: '5xl' }}
                    my={4}
                    fontWeight={600}
                    color={'cyan.500'}
                >
                    <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '5%',
                            position: 'absolute',
                            bottom: -1.5,
                            left: 0,
                            bg: useColorModeValue('gray.600', 'gray.300'),
                            zIndex: 1,
                        }}>
                        Basic Projects
                    </Text>
                </Heading>

                <Grid
                    templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={8}
                    py={5}>

                    {
                        projects.map((project) => (
                            <Project {...project} key={project._id} />
                        )).reverse()
                    }


                </Grid>

            </Container>
        </Container>
    )
}

export default Projects
