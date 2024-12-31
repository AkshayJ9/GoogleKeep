// We put that source code from Notes.jsx

// import { useContext } from "react";
// import { DataContext } from "../context/DataProvider";

// import { styled } from "@mui/material";
// import { Grid2, Box } from "@mui/material";
// import Archive1 from "./Archive1";

// const DrawerHeader = styled("div")(({ theme }) => ({
//   ...theme.mixins.toolbar,
// }));

// const Archive2 = () => {
//   const { archiveNotes } = useContext(DataContext);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <Box component="main" sx={{ p: 3, width: "100%" }}>
//         <Box sx={{ marginTop: "20px", width: "100%" }}>
//           <DrawerHeader />

//           <Grid2
//             container
//             spacing={2}
//             sx={{
//               marginTop: -6,
//               paddingTop: 20,
//               paddingX: 10,
//               overflow: "hidden",
//             }}
//           >
//             {archiveNotes.map((archive) => (
//               <Archive1 key={archive.id} note={archive} />
//             ))}
//           </Grid2>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Archive2;

// import { useContext } from "react";
// import { DataContext } from "../context/DataProvider";

// import { styled } from "@mui/material";
// import { Grid, Box, Typography } from "@mui/material";
// import Archive1 from "./Archive1";
// import { ArchiveOutlined } from "@mui/icons-material";

// const DrawerHeader = styled("div")(({ theme }) => ({
//   ...theme.mixins.toolbar,
// }));

// const EmptyArchiveContainer = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 50vh; /* Adjust height for centering */
//   color: #80868b; /* Google Keep-like color */
// `;

// const EmptyArchiveText = styled(Typography)`
//   margin-top: 10px;
//   font-size: 18px;
//   color: #80868b;
// `;

// const Archive2 = () => {
//   const { archiveNotes } = useContext(DataContext);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "100%",
//         overflow: "hidden",
//       }}
//     >
//       <Box component="main" sx={{ p: 3, width: "100%" }}>
//         <Box sx={{ marginTop: "20px", width: "100%" }}>
//           <DrawerHeader />
//           {archiveNotes.length > 0 ? (
//             <Grid
//               container
//               spacing={2}
//               sx={{
//                 marginTop: -6,
//                 paddingTop: 20,
//                 paddingX: 10,
//                 overflow: "hidden",
//               }}
//             >
//               {archiveNotes.map((archive) => (
//                 <Archive1 key={archive.id} note={archive} />
//               ))}
//             </Grid>
//           ) : (
//             <EmptyArchiveContainer>
//               <ArchiveOutlined
//                 style={{ fontSize: "150px", marginLeft: "70vh", opacity: 0.11 }}
//               />
//               <EmptyArchiveText style={{ marginLeft: "70vh" }}>
//                 Your archived notes appear here
//               </EmptyArchiveText>
//             </EmptyArchiveContainer>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Archive2;

import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

import { styled } from "@mui/material";
import { Grid2, Box, Typography } from "@mui/material";
import Archive1 from "./Archive1";
import { ArchiveOutlined } from "@mui/icons-material";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const EmptyArchiveContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  margin: auto;
  margin-left: 55vh;

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

const EmptyArchiveText = styled(Typography)`
  color: #80868b;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16spx;
  }
`;

const Archive2 = () => {
  const { archiveNotes } = useContext(DataContext);

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
      <Box
        component="main"
        sx={{ p: { xs: 2, md: 3 }, width: "100%", margin: 10 }}
      >
        <Box sx={{ marginTop: { xs: 1, md: 2 }, width: "100%" }}>
          <DrawerHeader />
          {archiveNotes.length > 0 ? (
            <Grid2
              container
              spacing={2}
              sx={{
                marginTop: { xs: 0, md: -6 },
                paddingTop: { xs: 5, md: 20 },
                paddingX: { xs: 2, md: 10 },
                overflow: "hidden",
              }}
            >
              {archiveNotes.map((archive) => (
                <Grid2 item xs={12} sm={6} md={4} lg={3} key={archive.id}>
                  <Archive1 note={archive} />
                </Grid2>
              ))}
            </Grid2>
          ) : (
            <EmptyArchiveContainer>
              <ArchiveOutlined
                style={{
                  fontSize: "150px", // Reduced size for better mobile scaling
                  opacity: 0.11,
                }}
              />
              <EmptyArchiveText>
                Your archived notes appear here
              </EmptyArchiveText>
            </EmptyArchiveContainer>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Archive2;
