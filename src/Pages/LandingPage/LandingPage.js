import React from "react";
import { AppBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LandingPage(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">
            <Typography
              variant="h6"
              component="a"
              href="/AIQ"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AIQ
            </Typography>
          </Button>
          <Button color="inherit">
            <Typography
              variant="h6"
              component="a"
              href="/AI_Project"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AI_Project
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>

      <h1>Smart Facility Management Portal</h1>
    </div>
  );
}
