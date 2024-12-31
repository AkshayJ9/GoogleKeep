import { LightbulbOutlined as Lightbulb } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

// const Light = styled(Lightbulb)`
//   font-size: 150px; /* Reduced default size for better responsiveness */
//   color: #f5f5f5;
//   opacity: 0.5;

//   @media (max-width: 768px) {
//     font-size: 100px; /* Adjust for tablets and smaller screens */
//   }

//   @media (max-width: 480px) {
//     font-size: 80px; /* Adjust for mobile screens */
//   }
// `;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 20px; /* Adjust for tablets and smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 18spx; /* Adjust for mobile screens */
  }
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  margin: auto;
  margin-left: 70vh;

  @media (max-width: 1024px) {
    margin-left: 50vh; /* Adjust for smaller desktops */
  }

  @media (max-width: 768px) {
    margin-top: 15vh;
    margin-left: auto; /* Center horizontally on smaller screens */
    margin-right: auto;
  }

  @media (max-width: 480px) {
    margin-top: 10vh; /* Reduce margin for mobile devices */
    margin-left: auto; /* Center horizontally on smaller screens */
    margin-right: auto;
    padding: 0 10px; /* Add horizontal padding for smaller screens */
  }
`;

const EmptyNotes = () => {
  return (
    <Container>
      <Lightbulb style={{ fontSize: "150px", opacity: 0.11 }} />
      <Text>Notes you add appear here</Text>
    </Container>
  );
};

export default EmptyNotes;
