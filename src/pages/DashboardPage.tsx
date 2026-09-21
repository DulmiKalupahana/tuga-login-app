import { Box, Typography } from "@mui/material";

// Placeholder — will show accessToken after Firebase auth
export default function DashboardPage() {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h5">Dashboard</Typography>
      <Typography variant="body2" color="text.secondary">
        Access token will be displayed here after login.
      </Typography>
    </Box>
  );
}
