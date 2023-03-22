import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Link as ReachLink } from "react-router-dom";
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    Link,
    useColorModeValue
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode("dark");
    const isDark = colorMode === "dark";

    return (
        <Stack p={5}
            bg={useColorModeValue('gray.50', 'gray.900')}>
            <Flex w="100%" alignItems={'center'}>
                <Heading as={ReachLink}
                        to="/" ml={{ base: 0, sm: 8 }} size="md" fontWeight="semibold" color="cyan.500">React Projects</Heading>
                <Spacer></Spacer>
                <IconButton as={Link} href={'https://www.instagram.com/jigarsable.dev/'} isExternal ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
                <IconButton as={Link} href={'https://www.linkedin.com/in/jigar-sable/'} isExternal ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
                <IconButton as={Link} href={'https://github.com/jigar-sable'} isExternal ml={2} mr={{ base: 0, sm: 8 }} icon={<FaGithub />} isRound="true"></IconButton>
                <IconButton ml={2} mr={{ base: 0, sm: 8 }} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} isRound="true"></IconButton>
            </Flex>

        </Stack>
    )
}

export default Navbar
