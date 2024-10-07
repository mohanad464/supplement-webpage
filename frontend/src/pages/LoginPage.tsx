import { Box, Container, Typography, TextField, Button } from "@mui/material";

const LoginPage = () => {
  
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography variant="h6">Login to Your Account</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
            border: 1,
            borderColor: "#f5f5f5",
            padding: 2,
          }}
        >
          <TextField label="Email" name="email" />

          <TextField type="password" label="Password" name="password" />
          <Button sx={{backgroundColor: "#C426DC"}} variant="contained">Login</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
