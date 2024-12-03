import { Box } from '@mui/material'
import React from 'react'
import ChatWindow from '../../sections/Chat/ChatWindow'
import Sidebar from '../../sections/Chat/Sidebar'

const Home = () => {
  return (
    <Box sx={{height:'100vh',display:"flex"}}>
        {/* Side Bar */}
        <Sidebar/>

        {/* Chat Window */}
        <ChatWindow/>

       </Box>

  )
}

export default Home
