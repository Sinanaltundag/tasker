import React from 'react'
import { useGlobalContext } from './context'
import Tasklist from './tasklist'
import Tasks from './tasks'
// import "../scss/App.scss"
import { Box, Button, Container, Switch, Typography } from '@mui/material'

const Main = () => {

const {isAddTaskOpen,setIsAddTaskOpen}=useGlobalContext()

// const first = useContext(second)
const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <Container maxWidth="sm">
    <Box sx={{ bgcolor: '#cfe8fc', padding: '10px' , width: '500px',textAlign: 'center'}}>
    <Typography variant="h3" gutterBottom component="div">
      Task Tracker
      </Typography>
      <Switch {...label} defaultChecked color="secondary" />
     <Button color="secondary" variant="contained" onClick={()=>setIsAddTaskOpen(!isAddTaskOpen)}>{isAddTaskOpen ? "Close":"Open"}</Button>
     {isAddTaskOpen && <Tasks/>}
     <Tasklist/>
     </Box>
    </Container>
  )
}

export default Main