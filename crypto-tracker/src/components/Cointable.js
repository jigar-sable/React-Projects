import {
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Box,
    useColorModeValue,
} from '@chakra-ui/react';
import Coin from './Coin';

const Cointable = ({ coins }) => {
    return (
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
                        <Th>Coin</Th>
                        <Th>Symbol</Th>
                        <Th>Current Price</Th>
                        <Th>Price Graph</Th>
                        <Th>Order Volume</Th>
                        <Th>Market Depth</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        coins.map((coin) => (
                            <Coin {...coin} key={coin.id} />
                        ))
                    }

                </Tbody>
            </Table>

        </Box>
    )
}

export default Cointable
