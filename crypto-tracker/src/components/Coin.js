import {
    Tr,
    HStack,
    Text,
    Td,
    Image
} from '@chakra-ui/react';

const Coin = ({ image, name, symbol, current_price, market_cap, total_volume, price_change_percentage_24h }) => {
    return (
        <Tr>
            <Td>
                <HStack>
                    <Image
                        boxSize='30px'
                        objectFit={'contain'}
                        src={image}
                        alt={name}
                    />

                    <Text>{name}</Text>
                </HStack>
            </Td>
            <Td><Text textTransform={'uppercase'}>{symbol}</Text></Td>
            <Td>₹{current_price.toLocaleString()}</Td>
            <Td>
                {
                    price_change_percentage_24h < 0 ? (
                        <Text color={'red.500'}>{price_change_percentage_24h.toFixed(2)}%</Text>
                    ) : (
                        <Text color={'green.300'}>{price_change_percentage_24h.toFixed(2)}%</Text>
                    )
                }
            </Td>
            <Td>{total_volume.toLocaleString()}</Td>
            <Td>{market_cap.toLocaleString()}</Td>
        </Tr>
    )
}

export default Coin
