import { useContext } from "react";

import { Archive, Delete, Edit } from "@mui/icons-material";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DataContext } from "../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px auto;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Note = ({ note }) => {
  const {
    notes,
    setNotes,
    archiveNotes,
    setArchieveNotes,
    deleteNotes,
    setDeleteNotes,
  } = useContext(DataContext);

  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchieveNotes((prevArr) => [note, ...prevArr]);
  };
  const deleteNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <div>
      <StyledCard>
        <CardContent>
          <Typography>
            <h4>{note.heading}</h4>
          </Typography>
          <Typography>
            <p>{note.text}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Archive
            fontSize="small"
            style={{ marginLeft: "auto", opacity: 0.6, cursor: "pointer" }}
            onClick={() => archiveNote(note)}
          />
          <Edit fontSize="small" style={{ opacity: 0.6, cursor: "pointer" }} />
          <Delete
            fontSize="small"
            style={{ opacity: 0.6, cursor: "pointer" }}
            onClick={() => deleteNote(note)}
          />
        </CardActions>
      </StyledCard>
    </div>
  );
};

export default Note;
