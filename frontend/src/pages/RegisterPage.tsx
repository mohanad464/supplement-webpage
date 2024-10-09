import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onSubmit = async () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // validate the form data
    if (!firstName || !lastName || !email || !password) {
      setError("Check the submitted data");
      return;
    }

    //Make the call to API to create the user
    const response = await fetch("http://localhost:3003/User/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    if (!response.ok) {
      setError("Unable to register user, please try different credientials!");
      return;
    }

    const token = await response.json();

    if (!token) {
      setError("Incorrect token");
      return;
    }
    navigate("/");
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '32px',
        }}
      >
        <Typography variant="h6">Register New Account</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '16px',
            border: '1px solid #f5f5f5',
            padding: '16px',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <TextField
            inputRef={firstNameRef}
            label="First Name"
            name="firstname"
            fullWidth
          />
          <TextField
            inputRef={lastNameRef}
            label="Last Name"
            name="lastname"
            fullWidth
          />
          <TextField
            inputRef={emailRef}
            label="Email"
            name="email"
            fullWidth
          />
          <TextField
            inputRef={passwordRef}
            type="password"
            label="Password"
            name="password"
            fullWidth
          />
          <Button
            onClick={onSubmit}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#C426DC',
              '&:hover': {
                backgroundColor: '#a01eb6',
              },
            }}
          >
            Register
          </Button>
          {error && (
            <Typography sx={{ color: 'red' }}>
              {error}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
