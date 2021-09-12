import React from 'react'
import { Container, Category, AddCategoryIcon } from './styles'
import ChannelButton from '../ChannelButton'

export default function ChannelList() {
    return (

        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>


            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="lolzinho" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="valorant" />




        </Container>

    )
}