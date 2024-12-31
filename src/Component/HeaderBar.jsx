import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewStreamIcon from "@mui/icons-material/ViewStream"; // For grid/list toggle icon
import { styled } from "@mui/material/styles";

const Header = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "#fff", // White header background
  boxShadow: "inset 0 -1px 0 0 #dadce0", // Subtle bottom border
  height: 74, // Standard Google Keep header height
}));

const ToolbarContent = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
}));

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  background: "#f1f3f4", // Light gray background for the search bar
  borderRadius: 8,
  padding: "6px 8px",
  marginLeft: 16,
  flexGrow: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: 8,
  flex: 1,
  color: "#5f6368", // Subtle text color
  fontSize: "0.875rem", // Slightly smaller font
  margin: 2,
}));

const HeaderBar = ({ open, handleDrawer }) => {
  const logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";
  return (
    <Header position="fixed">
      <ToolbarContent>
        {/* Left Section: Menu Icon and Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{ marginRight: 0.5 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="logo" style={{ width: 27, padding: 10 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              padding: 0.5,
              fontWeight: "520",
              fontSize: 21,
              margin: 0.2,
              color: "#5f6368",
            }}
          >
            Keep
          </Typography>
        </div>

        {/* Center Section: Search Bar */}
        <SearchContainer>
          <SearchIcon style={{ color: "#5f6368" }} />
          <StyledInputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </SearchContainer>

        {/* Right Section: Icons */}
        <div style={{ display: "flex", alignItems: "center", marginLeft: 16 }}>
          <IconButton>
            <RefreshIcon style={{ color: "#5f6368" }} />
          </IconButton>
          <IconButton>
            <ViewStreamIcon style={{ color: "#5f6368" }} />
          </IconButton>
          <IconButton>
            <SettingsIcon style={{ color: "#5f6368" }} />
          </IconButton>
        </div>
      </ToolbarContent>
    </Header>
  );
};

export default HeaderBar;
