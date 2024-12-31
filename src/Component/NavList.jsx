import { ListItemButton } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  LightbulbOutlined as Lightbulb,
  NotificationsNone as Reminder,
  // import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
  ArchiveOutlined as Archive,
  EditOutlined as Edit,
  DeleteOutlineTwoTone as Delete,
} from "@mui/icons-material";
import List from "@mui/material/List";
import { Link } from "react-router-dom";

const NavList = () => {
  const navList = [
    { id: 1, name: "Notes", icon: <Lightbulb />, route: "/" },
    // { id: 2, name: "Reminder", icon: <Reminder /> },
    { id: 3, name: "Archive", icon: <Archive />, route: "/archive" },
    // { id: 4, name: "Edit Labels", icon: <Edit /> },
    { id: 5, name: "Bin", icon: <Delete />, route: "/delete" },
  ];

  return (
    <List>
      {navList.map((list) => (
        <ListItemButton
          key={list.id}
          sx={{
            borderRadius: "8px",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
            margin: "4px 1px",
          }}
        >
          {/* if you enter the Link then your previous css of navbar is losses */}
          <Link
            to={list.route}
            style={{
              textDecoration: "none",
              display: "flex",
              color: "inherit",
            }}
          >
            <ListItemIcon
              primary={list.name}
              sx={{ color: "inherit", minWidth: "50px", alignItems: "center" }}
            >
              {list.icon}
            </ListItemIcon>
            <ListItemText
              primary={list.name}
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                color: "text.primary",
              }}
            />
          </Link>
        </ListItemButton>
      ))}
    </List>
  );
};

export default NavList;
