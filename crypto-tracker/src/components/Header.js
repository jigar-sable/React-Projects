import {
    Heading,
    Box,
    Spacer,
    IconButton,
    HStack,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            maxW={'full'}
            bg={useColorModeValue('gray.100', 'gray.900')}
        >
            <HStack
                py={4}
                mx={12}
                alignItems={'center'}>
                <Heading
                    fontSize={'4xl'}
                    bgGradient={'linear(to-l, #7928CA, #FF0080)'}
                    bgClip={'text'}>
                    Crypto Tracker
                </Heading>
                <Spacer></Spacer>
                <IconButton isRound='true' onClick={toggleColorMode}
                    bg={useColorModeValue('gray.200', 'gray.700')}>
                    {colorMode === 'dark' ? <FaSun /> : <FaMoon />}
                </IconButton>
            </HStack>

        </Box>
    )
}

export default Header
