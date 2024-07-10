import { Box } from "@mui/material"
import Sidebar from "./sections/Chat/Sidebar"
import ChatWindow from "./sections/Chat/ChatWindow"


function App() {
  return (
    <>
       <Box sx={{height:'100vh',display:"flex"}}>
        {/* Side Bar */}
        <Sidebar/>

        {/* Chat Window */}
        <ChatWindow/>

       </Box>
    </>
  )
}

export default App
