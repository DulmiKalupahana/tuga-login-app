import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import LoginForm from "../components/LoginForm";
import HeroSection from "../components/HeroSection";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const accessToken = await result.user.getIdToken();
      navigate("/dashboard", { state: { accessToken } });
    } catch (error) {
      console.error("Google login failed:", error);
      alert(`Google login failed: ${(error as Error).message}`);
    }
  };

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
          maxWidth: 1100,
          bgcolor: "#fff",
          borderRadius: { xs: 0, md: "16px" },
          boxShadow: { xs: "none", md: "0 8px 32px rgba(0,0,0,0.06)" },
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
            <LoginForm onGoogleLogin={handleGoogleLogin} />
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <HeroSection />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
