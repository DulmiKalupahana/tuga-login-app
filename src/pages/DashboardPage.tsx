import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Paper, Button, Stack } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

export default function DashboardPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const accessToken = location.state?.accessToken as string | undefined;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!accessToken) return;
    try {
      await navigator.clipboard.writeText(accessToken);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = accessToken;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 720,
          p: { xs: 3, md: 4 },
          borderRadius: "16px",
          border: "1px solid #E0E0E0",
          boxShadow: { xs: "none", md: "0 8px 32px rgba(0,0,0,0.06)" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: "22px",
            letterSpacing: "-0.02em",
            mb: 1,
            color: "#000",
          }}
        >
          Dashboard
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "12px",
            color: "#6B7280",
            letterSpacing: "0.01em",
            mb: 3,
          }}
        >
          Logged in with Google — your accessToken:
        </Typography>

        {accessToken ? (
          <Box
            sx={{
              bgcolor: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "12px",
              p: 2,
              mb: 2,
              overflow: "hidden",
            }}
          >
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "11px",
                lineHeight: 1.6,
                wordBreak: "break-all",
                color: "#111827",
                maxHeight: 220,
                overflowY: "auto",
              }}
            >
              {accessToken}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              bgcolor: "#FEF3C7",
              border: "1px solid #FCD34D",
              borderRadius: "12px",
              p: 2,
              mb: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "12px",
                color: "#92400E",
              }}
            >
              No accessToken found. Please log in again via Google on the login page.
            </Typography>
          </Box>
        )}

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <Button
            variant="contained"
            disableElevation
            startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
            onClick={handleCopy}
            disabled={!accessToken}
            sx={{
              bgcolor: "#000",
              color: "#fff",
              borderRadius: "25px",
              textTransform: "none",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              px: 3,
              "&:hover": { bgcolor: "#1a1a1a" },
            }}
          >
            {copied ? "Copied!" : "Copy Token"}
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/")}
            sx={{
              borderColor: "#000",
              color: "#000",
              borderRadius: "25px",
              textTransform: "none",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              px: 3,
              "&:hover": { borderColor: "#000", bgcolor: "#F9FAFB" },
            }}
          >
            Back to Login
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
