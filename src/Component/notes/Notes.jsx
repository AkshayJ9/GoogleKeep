import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { styled } from "@mui/material";
import { Grid2, Box } from "@mui/material";
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { Reorder } from "@mui/icons-material";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const Notes = () => {
  const { notes, setNotes } = useContext(DataContext);

  // Add cleanup for strict mode
  useEffect(() => {
    const cleanup = () => {
      const droppable = document.querySelector("[data-rbd-droppable-id]");
      if (droppable) {
        droppable.removeAttribute("data-rbd-droppable-id");
      }
    };
    return cleanup;
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedNotes = reorder(
      notes,
      result.source.index,
      result.destination.index
    );

    setNotes(reorderedNotes);
  };

  // Memoize the grid content
  const renderGrid = (provided) => (
    <Grid2
      container
      spacing={2}
      sx={{
        marginTop: -6,
        paddingTop: 20,
        paddingX: 10,
        overflow: "hidden",
        minHeight: "100px", // Add minimum height
      }}
      ref={provided.innerRef}
      {...provided.droppableProps}
    >
      {notes.map((note, index) => (
        <Draggable key={note.id} draggableId={note.id.toString()} index={index}>
          {(dragProvided) => (
            <Grid2
              item
              ref={dragProvided.innerRef}
              {...dragProvided.draggableProps}
              {...dragProvided.dragHandleProps}
              sx={{ width: "auto", minWidth: "200px" }}
            >
              <Note note={note} />
            </Grid2>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </Grid2>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <Box sx={{ marginTop: "20px", width: "100%" }}>
          <DrawerHeader />
          <Form />
          {notes.length > 0 ? (
            <DragDropContext onDragEnd={onDragEnd}>
              <Box sx={{ width: "100%", position: "relative" }}>
                <Droppable droppableId="droppable" type="NOTE">
                  {(provided, snapshot) => renderGrid(provided)}
                </Droppable>
              </Box>
            </DragDropContext>
          ) : (
            <EmptyNotes />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Notes;
