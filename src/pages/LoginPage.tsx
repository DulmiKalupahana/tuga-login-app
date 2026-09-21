import { Box } from "@mui/material";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fff",
        p: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 480,
          bgcolor: "#fff",
          borderRadius: { xs: 0, md: "16px" },
          boxShadow: { xs: "none", md: "0 8px 32px rgba(0,0,0,0.06)" },
          p: { xs: 2, sm: 4, md: 5 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}
