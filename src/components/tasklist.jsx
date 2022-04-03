import { Box, Button, ButtonGroup, Checkbox, Container } from "@mui/material";
import React from "react";
import { useGlobalContext } from "./context";

const Tasklist = () => {
  const { taskData, handleDelete, handleDone, handleEdit } = useGlobalContext();

  return (
    <Container>
      {taskData?.length > 0 ? (
      
              <Box
                
                sx={{
                  display: "flex",
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
                  p: 1,
                  m: 1,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
          {taskData.map((task) => (
            <Box key={task.id}
        sx={{
          display: 'flex',
          width: '90%',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: "2px solid rgba(0,0,0,0.5)",
          boxShadow: "1px 1px 5px 2px rgba(0,0,0,0.5)",
        }}
      >
                  <Checkbox
                  
                    checked={task.isDone}
                    onChange={() => handleDone(task.id)}
                    inputProps={{ "aria-label": "controlled" }}
                  /><Box sx={{ textTransform: 'capitalize',textDecoration: task.isDone && "line-through" }}>
                  <Box>
                    {task.task}
                  </Box>
                  <Box>{task.date}</Box>
                  </Box>
                  
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  <Button className="edit" onClick={() => handleEdit(task.id)}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(task.id)}>X</Button>
                  </ButtonGroup>
                </Box>
        
              
           
          ))}
      </Box>  
      ) : (
        <div>No Task</div>
      )}
    </Container>
  );
};

export default Tasklist;

/* import React from 'react'
import { useGlobalContext } from './context'

const Tasklist = () => {
    const {taskData, handleDelete, handleDone, handleEdit}=useGlobalContext()

  return (
    <div>
    {taskData?.length>0 ? <div className="container">
        {taskData.map(task => (
            <div className="title"  key={task.id}>
            <input type="checkbox" checked={task.isDone&&"checked"} onChange={()=>handleDone(task.id)}/>
               <p style={{textDecoration: task.isDone && "line-through"}}>{task.task}</p> 
               <p>{task.date}</p> 
               <button className="edit" onClick={()=>handleEdit(task.id)}>Edit</button>
               <button onClick={()=>handleDelete(task.id)}>X</button>
            </div>
        ))}
    </div>: <div>No Task</div> } 
    
    </div>
  )
}

export default Tasklist */