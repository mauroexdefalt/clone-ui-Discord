import React from 'react'
import { Grid } from './styles'
import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelList from '../ChanneList'
import ChanellData  from '../ChannelData'
import ChannelInfo  from '../ChannelInfo'
import UserInfo from '../UserInfo'
import UserList from '../UserList'


export default function Layout() {
    return (
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelList/>
            <ChanellData/>
            <ChannelInfo/>
            <UserInfo/>

            <UserList/>
        </Grid>

    )
}