// We put that source code from Note.jsx

// import { useContext } from "react";

// import { Unarchive, Delete, Edit } from "@mui/icons-material";
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

// const Archive1 = ({ note }) => {
//   const {
//     notes,
//     setNotes,
//     archiveNotes,
//     setArchieveNotes,
//     deleteNotes,
//     setDeleteNotes,
//   } = useContext(DataContext);

//   const unarchiveNote = (note) => {
//     const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
//     setArchieveNotes(updatedNotes);
//     setNotes((prevArr) => [note, ...prevArr]);
//   };
//   const deleteNote = (note) => {
//     const updatedArchiveNotes = archiveNotes.filter(
//       (data) => data.id !== data.id
//     );
//     setArchieveNotes(updatedArchiveNotes);
//     setDeleteNotes((prevArr) => [note, ...prevArr]);
//   };

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
//           <Unarchive
//             fontSize="small"
//             style={{ marginLeft: "auto", opacity: 0.6, cursor: "pointer" }}
//             onClick={() => unarchiveNote(note)}
//           />
//           <Edit fontSize="small" style={{ opacity: 0.6, cursor: "pointer" }} />
//           <Delete
//             fontSize="small"
//             style={{ opacity: 0.6, cursor: "pointer" }}
//             onClick={() => deleteNote(note)}
//           />
//         </CardActions>
//       </StyledCard>
//     </div>
//   );
// };

// export default Archive1;

import { useContext } from "react";

import { Unarchive, Delete, Edit } from "@mui/icons-material";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DataContext } from "../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px auto;
  padding-left: 10px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Archive1 = ({ note }) => {
  const {
    // notes,
    setNotes,
    archiveNotes,
    setArchieveNotes,
    // deleteNotes,
    setDeleteNotes,
  } = useContext(DataContext);

  const unarchiveNote = (note) => {
    // Remove the note from archiveNotes
    const updatedArchiveNotes = archiveNotes.filter(
      (data) => data.id !== note.id
    );
    setArchieveNotes(updatedArchiveNotes);

    // Add the note back to the main notes
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    // Remove the note from archiveNotes
    const updatedArchiveNotes = archiveNotes.filter(
      (data) => data.id !== note.id
    );
    setArchieveNotes(updatedArchiveNotes);

    // Add the note to deleteNotes
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <div>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">{note.heading}</Typography>
          <Typography variant="body2">{note.text}</Typography>
        </CardContent>
        <CardActions>
          <Unarchive
            fontSize="small"
            style={{ marginLeft: "auto", opacity: 0.6, cursor: "pointer" }}
            onClick={() => unarchiveNote(note)}
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

export default Archive1;
