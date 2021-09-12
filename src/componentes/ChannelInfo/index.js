import React from 'react'
import { Container, HashTagIcon, FreeChat , Separator , Description} from './styles'


export default function ChannelInfo() {
    return (
        <Container>

            <HashTagIcon />
            <FreeChat>chat-livre</FreeChat>
            <Separator/>
            <Description>Canal aberto para conversa</Description>

        </Container>
    )
}