import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#f1f6f0", // light greenish — matches design
        borderRadius: "16px",
        height: "100%",
        minHeight: { xs: 380, md: 520 },
        p: { xs: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Illustration placeholder — replace with your preferred image */}
      <Box
        component="img"
        src="https://illustrations.popsy.co/green/meditation.svg"
        alt="Tuga illustration"
        onError={(e) => {
          // fallback if link fails
          (e.target as HTMLImageElement).style.display = "none";
        }}
        sx={{
          width: "100%",
          maxWidth: 300,
          height: "auto",
          mb: 2,
          objectFit: "contain",
        }}
      />

      {/* Fallback text if image doesn't load */}
      <Box
        sx={{
          width: 200,
          height: 200,
          display: "none",
        }}
      />

      {/* Dots indicator — structure only */}
      <Box sx={{ display: "flex", gap: 0.8, mb: 2 }}>
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#d0d0d0" }} />
        <Box sx={{ width: 18, height: 6, borderRadius: 999, bgcolor: "#000" }} />
      </Box>

      <Typography
        variant="body1"
        sx={{ fontSize: "14px", lineHeight: 1.5, maxWidth: 280 }}
      >
        Make your work easier and organized
        <br />
        with <strong>Tuga&apos;s App</strong>
      </Typography>
    </Box>
  );
}
