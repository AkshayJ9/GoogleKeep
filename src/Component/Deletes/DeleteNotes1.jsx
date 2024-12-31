// We put that source code from Note.jsx

// import { useContext } from "react";

// import {
//   RestoreFromTrashOutlined as Restore,
//   DeleteForeverOutlined as Delete,
//   // Edit,
// } from "@mui/icons-material";
// import { Card, CardActions, CardContent, Typography } from "@mui/material";
// import { styled } from "@mui/material/styles";

// import { DataContext } from "../context/DataProvider";

// const StyledCard = styled(Card)`
//   width: 240px;
//   margin: 8px auto;
//   box-shadow: none;
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
// `;

// const DeleteNotes1 = ({ note }) => {
//   const {
//     notes,
//     setNotes,
//     // archiveNotes,
//     // setArchieveNotes,
//     // deleteNotes,
//     setDeleteNotes,
//   } = useContext(DataContext);

//   const restoreNote = (note) => {
//     // Filter out the note from deleteNotes
//     const updatedNotes = notes.filter((data) => data.id !== note.id);

//     setDeleteNotes(updatedNotes);

//     // Add the note back to notes
//     setNotes((prevArr) => [note, ...prevArr]);
//   };
//   const deleteNote = (note) => {
//     const updatedNotes = notes.filter((data) => data.id !== note.id);
//     setDeleteNotes(updatedNotes);
//     // setDeleteNotes((prevArr) => [note, ...prevArr]);
//   };
//   // const isNoteAlreadyDeleted = restoreNote.some(
//   //   (deleteNote) => deleteNote.id === note.id
//   // );
//   // if (!isNoteAlreadyDeleted) {
//   //   setDeleteNotes((prevArr) => [note, ...prevArr]);
//   // }

//   //   check if note exists
//   if (!note) {
//     return null; // prevent rendering if note is undefined
//   }

//   return (
//     <div>
//       <StyledCard>
//         <CardContent>
//           <Typography>
//             <h4>{note.heading}</h4>
//           </Typography>
//           <Typography>
//             <p>{note.text}</p>
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Delete
//             fontSize="small"
//             onClick={() => deleteNote(note)}
//             style={{
//               marginLeft: "180px",
//               opacity: 0.6,
//               cursor: "pointer",
//             }}
//           />
//           <Restore
//             fontSize="small"
//             style={{ marginLeft: "auto", opacity: 0.6, cursor: "pointer" }}
//             onClick={() => restoreNote(note)}
//           />
//           {/* <Edit fontSize="small" style={{ opacity: 0.6, cursor: "pointer" }} /> */}
//         </CardActions>
//       </StyledCard>
//     </div>
//   );
// };

// export default DeleteNotes1;

import { useContext } from "react";

import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
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

const DeleteNotes1 = ({ note }) => {
  const { notes, setNotes, deleteNotes, setDeleteNotes } =
    useContext(DataContext);

  const restoreNote = (note) => {
    // Filter out the note from deleteNotes
    const updatedDeleteNotes = deleteNotes.filter(
      (data) => data.id !== note.id
    );
    setDeleteNotes(updatedDeleteNotes);

    // Add the note back to notes
    setNotes((prevNotes) => [note, ...prevNotes]);
  };

  const deleteNote = (note) => {
    // Filter out the note from deleteNotes
    const updatedDeleteNotes = deleteNotes.filter(
      (data) => data.id !== note.id
    );
    setDeleteNotes(updatedDeleteNotes);
  };

  // Prevent rendering if the note doesn't exist
  if (!note) {
    return null;
  }

  return (
    <div>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">{note.heading}</Typography>
          <Typography variant="body2">{note.text}</Typography>
        </CardContent>
        <CardActions>
          <Delete
            fontSize="small"
            onClick={() => deleteNote(note)}
            style={{
              marginLeft: "180px",
              opacity: 0.6,
              cursor: "pointer",
            }}
          />
          <Restore
            fontSize="small"
            style={{ marginLeft: "auto", opacity: 0.6, cursor: "pointer" }}
            onClick={() => restoreNote(note)}
          />
        </CardActions>
      </StyledCard>
    </div>
  );
};

export default DeleteNotes1;
