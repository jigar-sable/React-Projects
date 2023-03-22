import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>

                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>

                    <HStack>
                        <Text>© {new Date().getFullYear()} React Projects. Designed By</Text>
                        <Text as={'a'} href={'https://www.linkedin.com/in/jigar-sable/'} target={'_blank'} color={'blue.500'} fontWeight={500}>Jigar Sable</Text>
                    </HStack>


                    <Stack direction={'row'} spacing={6}>
                        <IconButton isRound='true' as={'a'} href={'https://github.com/jigar-sable'} target='_blank'>
                            <FaGithub />
                        </IconButton>
                        <IconButton isRound='true' as={'a'} href={'https://www.linkedin.com/in/jigar-sable/'} target='_blank'>
                            <FaLinkedin />
                        </IconButton>
                        <IconButton isRound='true' as={'a'} href={'https://www.instagram.com/jigarsable.dev/'} target='_blank'>
                            <FaInstagram />
                        </IconButton>

                    </Stack>

                </Container>
            </Box>
        </>
    )
}

export default Footer
