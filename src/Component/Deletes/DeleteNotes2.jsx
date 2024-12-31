// We put that source code from Notes.jsx

import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

import { styled } from "@mui/material";
import { Button, Grid2, Box, Typography } from "@mui/material";

// components
import DeleteNotes1 from "./DeleteNotes1";
import { DeleteOutlined } from "@mui/icons-material";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const EmptyDeleteContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  margin: auto;
  margin-left: 70vh;

  @media (max-width: 1024px) {
    margin-left: 50vh;
  }
  @media (max-width: 768px) {
    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 480px) {
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
  }
`;
const EmptyDeleteText = styled(Typography)`
  margin-top: 10px;
  color: #80868b;
  font-size: 22px;
  text-align: center; /* Ensure text is centered for all devices */

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18spx;
  }
`;

// const HeaderDeleteall = styled(HeaderDeleteall)``;

const DeleteNotes2 = () => {
  const { deleteNotes, setDeleteNotes } = useContext(DataContext);

  const handleEmptyBin = () => {
    setDeleteNotes([]);
    console.log("Recycle Bin is Empty");
  };
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
      {/* This box is only for header text and thir all delete button  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on small screens, inline on larger screens
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" }, // Adjust spacing
          gap: 2, // Space between elements for smaller screens
          marginBottom: 4,
          marginTop: 15,

          position: "fixed",
          paddingX: { xs: 2, sm: 5 }, // Padding for spacing
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Align the text and button to opposite sides
            position: "fixed", // Fixes the Box at the top of the page
            top: 70, // Position it at the very top of the page
            left: 50, // Align to the left edge of the screen
            right: 0, // Align to the right edge of the screen
            backgroundColor: "#606060", // White background for better visibility
            paddingX: { xs: 2, sm: 4, md: 6 }, // Horizontal padding for mobile (xs), tablet (sm), and desktop (md)
            paddingY: { xs: 2, sm: 2 }, // Vertical padding, adjusted for mobile and desktop
            zIndex: 1000, // Ensure the component stays above other content
            boxShadow: "0 1px 4px rgb(0, 0, 0)", // Light shadow to make it stand out
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: { xs: "center", sm: "left" }, // Center text on small screens, left on larger screens
              color: "#ffffff",
              fontSize: { xs: "16px", sm: "18px", md: "20px" }, // Adjust font size for different screens
              flexGrow: 1, // Makes the text take up available space so the button stays aligned to the right
              paddingLeft: { xs: 0, sm: 3 }, // Add some left padding on larger screens for spacing
            }}
          >
            Notes in the Recycle Bin are deleted after 7 days.
          </Typography>

          <Button
            variant="contained"
            color="error"
            onClick={handleEmptyBin}
            sx={{
              textTransform: "none", // Google Keep-like button
              fontWeight: "bold",
              borderRadius: "9px",
              paddingX: { xs: 2, sm: 4 }, // Adjust padding for button size based on screen width
              fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for button
              minWidth: "auto", // Prevents button from stretching to full width
            }}
          >
            Empty Bin
          </Button>
        </Box>
      </Box>

      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <Box sx={{ marginTop: "20px", width: "100%" }}>
          <DrawerHeader />

          {deleteNotes.length > 0 ? (
            <Grid2
              container
              spacing={2}
              sx={{
                marginTop: -6,
                paddingTop: 20,
                paddingX: 10,
                overflow: "hidden",
              }}
            >
              {deleteNotes.map((note) => (
                <DeleteNotes1 key={note.id} note={note} />
              ))}
            </Grid2>
          ) : (
            <EmptyDeleteContainer>
              <DeleteOutlined style={{ fontSize: "150px", opacity: 0.11 }} />
              <EmptyDeleteText>No notes in Recycle Bin</EmptyDeleteText>
            </EmptyDeleteContainer>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DeleteNotes2;
