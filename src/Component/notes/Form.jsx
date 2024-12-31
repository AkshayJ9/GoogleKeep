import { styled } from "@mui/material";
import { Box, TextField, ClickAwayListener } from "@mui/material";
import { useState, useRef, useContext } from "react";
import { v4 as uuid } from "uuid";

import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  /* margin: 0 auto; */
  padding: 15px 20px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: #ffffff;

  @media (max-width: 768px) {
    max-width: 65%;
    padding: 10px 15px;
    margin-left: 25px;
    top: 90px;
  }

  @media (max-width: 480px) {
    max-width: 70%;
    padding: 8px 12px;
    margin-left: 25px;

    top: 80px;
  }

  /* Add bottom margin to ensure notes start below the form */
  margin-bottom: 150px; /* Adjust this as needed */
`;

// Object Creation
// We will pass this object in useState for implementing this in all notes and titles
const note = {
  id: "",
  // id:uuid(); we can use like that but it will show only one note id
  // thats why we will used uuid in useState as id
  heading: "",
  text: "",
};
const Form = () => {
  const [showTextfield, setShowTextfield] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  // Context state used Here
  const { setNotes } = useContext(DataContext);
  // const { notes, setNotes } = useContext(DataContext);
  // we dont have need to use the notes in tht datacontext
  const containerRef = useRef();
  const ontextAreaClick = () => {
    setShowTextfield(true);
    containerRef.current.style.minheight = "70px";
  };
  const HandleClickAway = () => {
    setShowTextfield(false);
    containerRef.current.style.minheight = "30px";
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text)
      setNotes((prevArr) => [addNote, ...prevArr]);
    // console.log(notes);
  };

  const onTextChange = (e) => {
    // console.log(e.target.name, e.target.value);
    const changedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={HandleClickAway}>
      <Container ref={containerRef}>
        {showTextfield && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={(e) => onTextChange(e)}
            name="heading"
            value={addNote.heading}
          />
        )}
        <TextField
          placeholder="Take a note..."
          style={{ opacity: 40 }}
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={ontextAreaClick}
          onChange={(e) => onTextChange(e)}
          name="text"
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
