import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#F4F7F4",
        borderRadius: "16px",
        height: "100%",
        minHeight: { xs: 380, md: 520 },
        p: { xs: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="https://illustrations.popsy.co/green/meditation.svg"
        alt="Tuga illustration"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
        sx={{
          width: "100%",
          maxWidth: 300,
          height: "auto",
          mb: 3,
          objectFit: "contain",
        }}
      />

      {/* Dots indicator */}
      <Box sx={{ display: "flex", gap: 0.8, mb: 2.5 }}>
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#D9D9D9" }} />
        <Box sx={{ width: 18, height: 6, borderRadius: 999, bgcolor: "#000" }} />
      </Box>

      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          lineHeight: 1.6,
          letterSpacing: "0.01em",
          color: "#1a1a1a",
          maxWidth: 280,
        }}
      >
        Make your work easier and organized
        <br />
        with{" "}
        <Box
          component="span"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            color: "#000",
            letterSpacing: "-0.01em",
          }}
        >
          Tuga&apos;s App
        </Box>
      </Typography>
    </Box>
  );
}
