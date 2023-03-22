import {
    Text,
    Button,
    Image,
    Heading,
    Stack,
    Flex,
    Box,
    Container,
    Link
} from '@chakra-ui/react';
import Hero from '../images/react.png';

function Header() {

    return (
        <Container maxW='6xl'>

            <Stack
                py={{ base: 15, md: 20 }}
                spacing={{ base: 8, md: 10 }}
                direction={{ base: 'column', md: 'row' }}
                align='center'>

                <Stack flex={1} direction={'column'} spacing={4}>
                    <Heading
                        fontSize={{ base: '3xl', md: '5xl' }}
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                        bgClip="text">
                        ReactJS Projects
                    </Heading>

                    <Text color={'gray.500'}>
                        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}
                    >
                        <Button
                            as={Link}
                            href={'https://reactjs.org/docs/getting-started.html'}
                            isExternal
                            style={{ textDecoration: 'none' }}
                            rounded={'full'}
                            size={'lg'}
                            px={6}
                            colorScheme={'cyan'}
                            fontWeight={500}
                            bg={'cyan.400'}
                            _hover={{ bg: 'cyan.500' }}>
                            Get Started
                        </Button>
                        {/* <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}>
                            How It Works
                        </Button> */}
                    </Stack>

                </Stack>

                <Flex
                    flex={1}>
                    <Box
                        position={'relative'}
                        height={'350px'}
                        width={'full'}
                        overflow={'hidden'}>
                        <Image
                            alt={'Hero Image'}
                            fit={'contain'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={Hero}
                        />
                    </Box>
                </Flex>
            </Stack>

        </Container>
    )
}

export default Header
