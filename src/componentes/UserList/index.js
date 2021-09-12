import React from 'react'

import { Container, Role, User, Avatar } from './styles';

const UserRow = ({ nickname, isBot }) => {
    return (
      <User>
        <Avatar className={isBot ? 'bot' : ''} />
  
        <strong>{nickname}</strong>
  
        {isBot && <span>Bot</span>}
      </User>
    );
  };

export default function UserList(){
    return(

        <Container>
        <Role>Disponível - 1</Role>
        <UserRow nickname="Guilherme Rodz" />
  
        <Role>Offline - 18</Role>
        <UserRow nickname="PrazoEsforço" isBot />
        <UserRow nickname="Tuliao" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Felipe" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Wagnao" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Simone" />
        <UserRow nickname="Mauro" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fabi" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
      </Container>

    )
}