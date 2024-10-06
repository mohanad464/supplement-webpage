import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Alert } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = 'First name is required';
    if (!formData.lastname.trim()) newErrors.lastname = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      try {
        // Add your registration logic here
        console.log('Form submitted:', formData);
        // On successful registration, redirect to login
        navigate('/login');
      } catch (error) {
        setSubmitError('Registration failed. Please try again.');
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
          mb: 4,
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>Register New Account</Typography>
        
        {submitError && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{submitError}</Alert>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: '100%',
            border: 1,
            borderColor: "#f5f5f5",
            borderRadius: 1,
            padding: 3,
          }}
        >
          <TextField 
            label="First Name" 
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            error={!!errors.firstname}
            helperText={errors.firstname}
            fullWidth
          />
          <TextField 
            label="Last Name" 
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            error={!!errors.lastname}
            helperText={errors.lastname}
            fullWidth
          />
          <TextField 
            label="Email" 
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
          <TextField 
            type="password" 
            label="Password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
          />
          <Button 
            type="submit"
            sx={{
              backgroundColor: "#C426DC",
              '&:hover': {
                backgroundColor: '#a01eb6'
              }
            }} 
            variant="contained"
            fullWidth
          >
            Register
          </Button>
          
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#C426DC', textDecoration: 'none' }}>
                Login here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;