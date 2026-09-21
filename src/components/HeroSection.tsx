import { Box, Typography, CircularProgress } from "@mui/material";
import illustration from "../assets/image.svg";

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#EFF4EF",
        borderRadius: "24px",
        minHeight: { xs: 400, md: 560 },
        height: "100%",
        p: { xs: 2.5, md: 3 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 320,
          mb: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 220,
            height: 120,
            border: "1.5px solid #C8E6C9",
            borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
            opacity: 0.9,
            pointerEvents: "none",
            "&::before": {
              content: '""',
              position: "absolute",
              width: 18,
              height: 18,
              border: "1.5px solid #C8E6C9",
              borderRadius: "50%",
              top: -6,
              left: 36,
              bgcolor: "#EFF4EF",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              width: 14,
              height: 14,
              border: "1.5px solid #C8E6C9",
              borderRadius: "50%",
              top: -2,
              right: 28,
              bgcolor: "#EFF4EF",
            },
          }}
        />

        <Box
          component="img"
          src={illustration}
          alt="Yoga productivity illustration"
          sx={{
            width: "100%",
            maxWidth: 300,
            height: "auto",
            maxHeight: 280,
            objectFit: "contain",
            zIndex: 1,
            mt: 2,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 4,
            left: 4,
            bgcolor: "#fff",
            borderRadius: "16px",
            p: 1.5,
            minWidth: 148,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            border: "1px solid #F0F0F0",
            zIndex: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "11px",
                  lineHeight: 1.2,
                  color: "#000",
                  letterSpacing: "-0.01em",
                }}
              >
                Canva Design
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "10px",
                  color: "#9E9E9E",
                  lineHeight: 1.2,
                }}
              >
                10 Task
              </Typography>
            </Box>

            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                value={84}
                size={36}
                thickness={4}
                sx={{
                  color: "#9FD094",
                  "& .MuiCircularProgress-circle": { strokeLinecap: "round" },
                }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  84%
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              border: "1px solid #E0E0E0",
              borderRadius: "999px",
              px: 1.2,
              py: 0.3,
              bgcolor: "#fff",
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "9px",
                fontWeight: 500,
                color: "#616161",
                letterSpacing: "0.02em",
              }}
            >
              Design
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 2 }}>
        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#D9D9D9" }} />
        <Box sx={{ width: 22, height: 6, borderRadius: 999, bgcolor: "#000" }} />
      </Box>

      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "14px",
          lineHeight: 1.5,
          letterSpacing: "0.01em",
          color: "#1a1a1a",
          textAlign: "center",
          maxWidth: 300,
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
