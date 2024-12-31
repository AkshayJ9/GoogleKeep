import SwipDrawer from "./SwipDrawer";
import Notes from "./Notes/Notes";
import { Box } from "@mui/material";

// React Router Dom packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DeleteNotes1 from "./Deletes/DeleteNotes1";
import DeleteNotes2 from "./Deletes/DeleteNotes2";

import Archive2 from "./Archives/Archive2";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <SwipDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="archive" element={<Archive2 />} />
          <Route path="/delete" element={<DeleteNotes2 />} />
        </Routes>
      </Router>
      {/* <Notes />
      <DeleteNotes1 />
      <DeleteNotes2 /> */}
    </Box>
  );
};

export default Home;
