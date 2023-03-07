import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AppBarComponent(props) {
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
            variant="h6"
            component="a"
            href="/AIQ"
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
            AIQ
          </Typography>
        </Button>
        <Button variant="contained" color="primary">
          <Typography
            variant="h6"
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
            AI_Project
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
