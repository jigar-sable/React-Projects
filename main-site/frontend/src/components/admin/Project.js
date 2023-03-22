import {
    Tr,
    Link,
    Text,
    Td,
    Image,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useState, useRef } from 'react';

const Project = ({ _id, name, view, code, preview, deleteProject }) => {

    const [isOpen, setIsOpen] = useState(false);
    const cancelRef = useRef();

    const deleteProjectById = (id) => {
        // console.log(id)
        deleteProject(id);
        setIsOpen(false);
    }

    return (
        <>
            <Tr>
                <Td>
                    <Image
                        h={20}
                        w={120}
                        objectFit={'cover'}
                        rounded={'md'}
                        src={preview}
                        alt={name}
                        draggable='false'
                    />

                </Td>
                <Td><Text textTransform={'uppercase'}>{name}</Text></Td>
                <Td>
                    <Link href={view} color={'cyan.500'} isExternal style={{ textDecoration: 'none' }}>
                        View <ExternalLinkIcon mx='2px' />
                    </Link>
                </Td>
                <Td>
                    <Link href={code} color={'cyan.500'} isExternal style={{ textDecoration: 'none' }}>
                        Code <ExternalLinkIcon mx='2px' />
                    </Link>
                </Td>
                <Td>
                    <Button 
                    as={ReachLink} 
                    to={`/admin/edit/${_id}`} 
                    variant={'solid'} 
                    colorScheme={'cyan'} 
                    mr={4} 
                    size={'md'}
                    leftIcon={<MdEdit />} >
                        Edit
                    </Button>
                    <Button variant={'solid'} colorScheme={'red'} size={'md'} leftIcon={<MdDelete />} onClick={() => setIsOpen(true)}>
                        Delete
                    </Button>
                </Td>
            </Tr>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={() => setIsOpen(false)}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete {name}
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => deleteProjectById(_id)} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

        </>
    )
}

export default Project
