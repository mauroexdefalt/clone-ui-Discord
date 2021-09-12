import React, { useEffect, useRef } from 'react'


import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage from '../ChannelMessage'



export default function ChannelData() {
    const messageRef = useRef()


    useEffect(() => {
        const div = messageRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;

        }

    }, [messageRef])

    return (

        <Container>
            <Messages ref={messageRef}>
                {Array.from(Array(15).keys()).map((n) => (

                    <ChannelMessage
                        key={n}
                        author="Mauro Viera"
                        date="11/09/2021"
                        content="Messagem de teste!"
                    />



                ))}


            </Messages>

        </Container>

    )
}