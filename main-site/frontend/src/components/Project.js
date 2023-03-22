import {
    Button,
    Image,
    Heading,
    HStack,
    Box,
    useColorMode,
} from '@chakra-ui/react';

const Project = ({ name, view, code, preview }) => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === 'dark';

    return (
        <Box
            w={'full'}
            position={'relative'}
            overflow={'hidden'}
            rounded={'md'}
            boxShadow={'md'}
            transition={'.2s ease'}
            bg={isDark ? 'gray.900' : 'white'}
            _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'lg'
            }}>

            <Image
                h={'15rem'}
                w={'full'}
                src={preview}
                objectFit={'cover'}
            />
            <Heading
                fontSize={'xl'}
                fontWeight={600}
                px={4}
                pt={3}
                color={isDark ? 'white' : 'gray.900'}
                // backgroundColor={isDark ? 'blackAlpha.600' : 'whiteAlpha.600'}
                w={'full'}
                // position={'absolute'}
                top={0}>
                {name}
            </Heading>
            <HStack
                spacing={4}
                my={4}
                mx={4}
            >

                <Button
                    as={'a'}
                    href={view}
                    target={'_blank'}
                    w={'full'}
                    colorScheme={'blue'}
                    bg={isDark ? 'blue.300' : 'blue.500'}
                    _hover={{ bg: isDark ? 'blue.400' : 'blue.600' }}
                >
                    Preview
                </Button>
                <Button
                    as={'a'}
                    href={code}
                    target={'_blank'}
                    w={'full'}
                    colorScheme={'blue'}
                    variant={'outline'}
                >
                    Code
                </Button>
            </HStack>
        </Box>
    )
}

export default Project
