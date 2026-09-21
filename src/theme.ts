import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h4: {
      fontWeight: 800,
      fontSize: "28px",
      fontFamily: "'Poppins', sans-serif",
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
    },
    body2: {
      fontFamily: "'Poppins', sans-serif",
    },
    button: {
      fontFamily: "'Poppins', sans-serif",
      textTransform: "none",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px",
            backgroundColor: "#fff",
            fontFamily: "'Poppins', sans-serif",
            "& fieldset": {
              borderColor: "#BDBDBD",
            },
          },
          "& .MuiOutlinedInput-input": {
            fontFamily: "'Poppins', sans-serif",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          textTransform: "none",
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          boxShadow: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
  },
});

export default theme;
