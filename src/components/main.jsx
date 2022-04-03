import React from 'react'
import { useGlobalContext } from './context'
import Tasklist from './tasklist'
import Tasks from './tasks'
import { Box, Button, Container, Switch, Typography } from '@mui/material'

const Main = () => {

const {isAddTaskOpen,setIsAddTaskOpen}=useGlobalContext()

const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <Container maxWidth="sm" sx={{ mx: "auto" }}>
    <Box sx={{ bgcolor: '#cfe8fc', padding: '10px' , width: '500px',textAlign: 'center'}}>
    <Typography variant="h3" gutterBottom component="div">
      Task Tracker
      </Typography>
      <Switch {...label} defaultChecked color="secondary" />
     <Button color="secondary" variant="contained" onClick={()=>setIsAddTaskOpen(!isAddTaskOpen)}>{isAddTaskOpen ? "Close Add Task":"Open Add Task"}</Button>
     {isAddTaskOpen && <Tasks/>}
     <Tasklist/>
     </Box>
    </Container>
  )
}

export default Main