import { Input } from '@chakra-ui/react';

const Searchbar = ({ search, setSearch }) => {
    return (
        <Input
            variant={'filled'}
            size={'lg'}
            maxW={'3xl'}
            placeholder={'Search Coin..'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        >

        </Input>
    )
}

export default Searchbar
