import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function AppBarComponent(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <AdbIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} />
        </Typography>
        <Button variant="contained" color="primary">
          <Typography
            align="center"
            variant="h6"
            component="a"
            href="/IAQ"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            IAQ
          </Typography>
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          id="ai_project"
        >
          <Typography
            align="center"
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AI_Projects
          </Typography>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "ai_project",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Typography
              align="center"
              variant="p"
              component="a"
              href="/AI_Project"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AI Facilities Management
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              align="center"
              variant="p"
              component="a"
              href="/AI_Project/TrainWatch"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Train Watch
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography
              align="center"
              variant="p"
              component="a"
              href="/AI_Project/WildBoar"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Wild Boar
            </Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
