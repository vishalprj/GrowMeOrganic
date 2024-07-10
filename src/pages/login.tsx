import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { toast } from "react-toastify";

export type LoginFormInput = {
  name: string;
  phoneNumber: string;
  email: string;
};

const Login = () => {
  const [formData, setFormData] = useState<LoginFormInput>({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(formData));
    navigate("/");
    toast.success("User login successfully");
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
