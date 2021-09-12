import React from 'react'
import { Avatar, Content, Container, Header, Mention, Message } from './styles'

export default function ChannelMessage(props) {

    return (

        <Container className={props.hasMention ? 'mention' : ''}>
      <Avatar className={props.isBot ? 'bot' : ''} />

      <Message>
        <Header>
          <strong>{props.author}</strong>

          {props.isBot && <span>Bot</span>}

          <time>{props.date}</time>
        </Header>
        <Content>{props.content}</Content>
      </Message>
    </Container>

    )


}