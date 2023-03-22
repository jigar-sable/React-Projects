import {
    Container,
    Box,
    Textarea,
    HStack,
    Heading
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

function ChakraUI() {

    const [markdown, setMarkdown] = useState("");

    return (
        <>
            <Container maxW='6xl'>

                <Heading
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontWeight={700}
                    fontSize='4xl'
                    textAlign={'center'}
                    my={5}
                >React Markdown Editor</Heading>

                <HStack>

                    <Box w={'full'}>
                        <Textarea resize='none' w={'full'} h={'80vh'} bg={'gray.900'}
                            value={markdown} onChange={(e) => setMarkdown(e.target.value)}></Textarea>
                    </Box>
                    <Box w={'full'}>
                        {/* <Textarea resize='none' w={'full'} h={'80vh'} bg={'gray.900'}
          value={}></Textarea> */}
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </Box>

                </HStack>

            </Container>
        </>
    );
}

export default ChakraUI;