import {
    Button,
    Flex,
    Heading,
} from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom";

const NotFound = () => {
    return (
        <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            direction={'column'}
            gap={6}>
            <Heading>404 Page Not Found!</Heading>
            <Button as={ReachLink} to="/" colorScheme={'blue'}>Go To Home</Button>
        </Flex>
    )
}

export default NotFound
