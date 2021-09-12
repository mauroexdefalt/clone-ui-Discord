import React from 'react'
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'


export default function ChannelButton(props) {
    return (
        <Container>
            <div>
                <HashtagIcon />
                <span>{props.channelName}</span>
            </div>
            <div>
                <InviteIcon />
                <SettingsIcon />
            </div>

        </Container>

    )
}

