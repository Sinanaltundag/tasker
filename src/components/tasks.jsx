import {
  Button,
  Container,
  
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";
import { useGlobalContext } from "./context";

const Tasks = () => {
  const { inputValue, handleClick, handleChange } = useGlobalContext();

  return (
    <Container>
      <FormGroup>
        <TextField
          id="task"
          label="Task"
          variant="outlined"
          margin="dense"
          required
          onChange={(e) => handleChange(e)}
          value={inputValue.task}
          name="task"
        />
        <TextField
          id="date"
          name="date"
          label="Date"
          variant="outlined"
          margin="dense"
          required
          onChange={(e) => handleChange(e)}
          value={inputValue.date}
        />
      </FormGroup>
      <Button variant="contained" color="success" onClick={handleClick} sx={{ width: '50%' }}>
        Save Task
      </Button>
    </Container>
  );
};

export default Tasks;
