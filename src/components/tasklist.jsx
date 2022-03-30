import { Box, Button, Checkbox, Container } from "@mui/material";
import React from "react";
import { useGlobalContext } from "./context";

const Tasklist = () => {
  const { taskData, handleDelete, handleDone, handleEdit } = useGlobalContext();

  return (
    <div>
      {taskData?.length > 0 ? (
      <Container>
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
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
                  <Checkbox
                    checked={task.isDone && "checked"}
                    onChange={() => handleDone(task.id)}
                    inputProps={{ "aria-label": "controlled" }}
                  /><Box>
                  <Box sx={{ textTransform: 'capitalize',textDecoration: task.isDone && "line-through" }} style={{  }}>
                    {task.task}
                  </Box>
                  <Box sx={{ textTransform: 'capitalize' }}>{task.date}</Box>
                  </Box>
                  <Button className="edit" onClick={() => handleEdit(task.id)}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(task.id)}>X</Button>
                </Box>
        
              
           
          ))}
      </Box>  </Container>
      ) : (
        <div>No Task</div>
      )}
    </div>
  );
};

export default Tasklist;
