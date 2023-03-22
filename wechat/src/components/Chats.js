import { Spinner, Flex, Heading, Button, Spacer } from '@chakra-ui/react';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase-config';
import { FiLogOut } from 'react-icons/fi';

const Chats = () => {

    const { user } = useAuth();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const getFile = async (url) => {
        const res = await fetch(url);
        const data = await res.blob();

        return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
    }

    useEffect(() => {
        // console.log(user);
        if (!user) {
            navigate("/");
            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
                "user-name": user.email,
                "user-secret": user.uid,
            }
        }).then(() => {
            // console.log("user exists..")
            setLoading(false)
        }).catch(() => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.email);
            formdata.append('secret', user.uid);

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name)

                    axios.post('https://api.chatengine.io/users',
                        formdata,
                        {
                            headers: {
                                "private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY,
                            }
                        }
                    ).then(() => {
                        // console.log('user generated')
                        setLoading(false)
                    })
                    .catch((err) => console.log(err))
                })
        })

    }, [navigate, user]);

    const logOut = () => {
        signOut(auth);
        navigate("/");
    }

    if (!user || loading) {
        return (
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}>

                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />

            </Flex>
        )
    }

    return (
        <>
            <Flex
                align={'center'}
                bg={'gray.100'}
                px={8}
                py={3}>
                <Heading size={'lg'} color={'purple.500'}>
                    WeChat
                </Heading>
                <Spacer></Spacer>
                <Button
                    onClick={() => logOut()}
                    colorScheme='purple'
                    variant='solid'
                    rightIcon={<FiLogOut />}>
                    Logout
                </Button>
            </Flex>

            <ChatEngine
                height="calc(100vh - 70px)"
                projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </>
    )
}

export default Chats
