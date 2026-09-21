import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

type LoginFormProps = {
  onGoogleLogin: () => void;
  onAppleLogin?: () => void;
  onFacebookLogin?: () => void;
};

export default function LoginForm({
  onGoogleLogin,
  onAppleLogin,
  onFacebookLogin,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validate = (): boolean => {
    let valid = true;

    if (!username.trim()) {
      setUsernameError("Username or Email is required");
      valid = false;
    } else if (username.includes("@") && !/\S+@\S+\.\S+/.test(username)) {
      setUsernameError("Please enter a valid email address");
      valid = false;
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleLogin = () => {
    validate();
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          textAlign: "center",
          color: "#000",
          mb: 1.2,
        }}
      >
        Welcome back!
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          textAlign: "center",
          color: "#6B7280",
          fontSize: "11px",
          lineHeight: 1.6,
          letterSpacing: "0.01em",
          maxWidth: 300,
          mb: 3.5,
        }}
      >
        Simplify your workflow and boost your productivity with{" "}
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
        . Get started for free.
      </Typography>

      {/* Username / Email */}
      <TextField
        fullWidth
        placeholder="Username"
        size="small"
        value={username}
        autoComplete="off"
        onChange={(e) => {
          setUsername(e.target.value);
          if (usernameError) setUsernameError("");
        }}
        error={!!usernameError}
        helperText={usernameError}
        sx={{
          mb: usernameError ? 0.5 : 1.5,
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px",
            bgcolor: "#fff",
            fontFamily: "'Poppins', sans-serif",
            "& fieldset": { borderColor: "#D1D5DB" },
          },
          "& .MuiOutlinedInput-input": {
            py: 1.4,
            fontSize: "13px",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.01em",
            bgcolor: "#fff",
            "&::placeholder": {
              fontFamily: "'Poppins', sans-serif",
              opacity: 0.6,
            },
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #fff inset !important",
            WebkitTextFillColor: "#000 !important",
            caretColor: "#000",
            transition: "background-color 5000s ease-in-out 0s",
          },
          "& input:-webkit-autofill:hover": {
            WebkitBoxShadow: "0 0 0 1000px #fff inset !important",
          },
          "& input:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 1000px #fff inset !important",
          },
          "& .MuiFormHelperText-root": {
            ml: 1.5,
            fontSize: "11px",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.01em",
          },
        }}
      />

      {/* Password with visibility toggle */}
      <TextField
        fullWidth
        placeholder="Password"
        size="small"
        type={showPassword ? "text" : "password"}
        value={password}
        autoComplete="new-password"
        onChange={(e) => {
          setPassword(e.target.value);
          if (passwordError) setPasswordError("");
        }}
        error={!!passwordError}
        helperText={passwordError}
        sx={{
          mb: passwordError ? 0 : 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px",
            bgcolor: "#fff",
            fontFamily: "'Poppins', sans-serif",
            "& fieldset": { borderColor: "#D1D5DB" },
          },
          "& .MuiOutlinedInput-input": {
            py: 1.4,
            fontSize: "13px",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.01em",
            bgcolor: "#fff",
            "&::placeholder": {
              fontFamily: "'Poppins', sans-serif",
              opacity: 0.6,
            },
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #fff inset !important",
            WebkitTextFillColor: "#000 !important",
            caretColor: "#000",
            transition: "background-color 5000s ease-in-out 0s",
          },
          "& input:-webkit-autofill:hover": {
            WebkitBoxShadow: "0 0 0 1000px #fff inset !important",
          },
          "& input:-webkit-autofill:focus": {
            WebkitBoxShadow: "0 0 0 1000px #fff inset !important",
          },
          "& .MuiFormHelperText-root": {
            ml: 1.5,
            fontSize: "11px",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.01em",
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                  sx={{ p: 0.5 }}
                  aria-label={showPassword ? "hide password" : "show password"}
                >
                  {showPassword ? (
                    <Visibility sx={{ fontSize: 18, color: "#9CA3AF" }} />
                  ) : (
                    <VisibilityOff sx={{ fontSize: 18, color: "#9CA3AF" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      {/* Forgot Password */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mb: 2.2,
        }}
      >
        <Link
          href="#"
          underline="none"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.01em",
            color: "#000",
          }}
        >
          Forgot Password?
        </Link>
      </Box>

      {/* Login Button */}
      <Button
        fullWidth
        variant="contained"
        disableElevation
        onClick={handleLogin}
        sx={{
          bgcolor: "#000",
          color: "#fff",
          borderRadius: "25px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: "13px",
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "0.02em",
          py: 1.25,
          mb: 2.5,
          "&:hover": { bgcolor: "#1a1a1a" },
        }}
      >
        Login
      </Button>

      {/* Divider — or continue with */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          mb: 2.5,
        }}
      >
        <Divider sx={{ flex: 1 }} />
        <Typography
          sx={{
            px: 1.5,
            color: "#6B7280",
            fontSize: "11px",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          or continue with
        </Typography>
        <Divider sx={{ flex: 1 }} />
      </Box>

      {/* Social login icons */}
      <Box sx={{ display: "flex", gap: 1.5, mb: 4 }}>
        <IconButton
          onClick={onGoogleLogin}
          aria-label="Continue with Google"
          sx={{
            bgcolor: "#000",
            color: "#fff",
            width: 42,
            height: 42,
            "&:hover": { bgcolor: "#1a1a1a" },
          }}
        >
          <GoogleIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <IconButton
          aria-label="Continue with Apple"
          onClick={() =>
            onAppleLogin
              ? onAppleLogin()
              : alert("Apple Login is not configured for this assessment.")
          }
          sx={{
            bgcolor: "#000",
            color: "#fff",
            width: 42,
            height: 42,
            "&:hover": { bgcolor: "#1a1a1a" },
          }}
        >
          <AppleIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton
          aria-label="Continue with Facebook"
          onClick={() =>
            onFacebookLogin
              ? onFacebookLogin()
              : alert("Facebook Login is not configured for this assessment.")
          }
          sx={{
            bgcolor: "#000",
            color: "#fff",
            width: 42,
            height: 42,
            "&:hover": { bgcolor: "#1a1a1a" },
          }}
        >
          <FacebookIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>

      {/* Footer */}
      <Typography
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.01em",
          color: "#000",
          textAlign: "center",
        }}
      >
        Not a member?{" "}
        <Link
          href="#"
          underline="none"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            color: "#7AA07A",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.01em",
          }}
        >
          Register now
        </Link>
      </Typography>
    </Box>
  );
}
