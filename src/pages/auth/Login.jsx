import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Box sx={{height:'100vh'}}>
      <Container maxWidth="sm" sx={{height:1}}>
        <Stack sx={{height:1,alignItems:"center",justifyContent:"center"}}>
          <Card>
          <CardContent>
            <Stack spacing={3}>
              <Stack spacing={2}>
                <Typography variant="h5">Login</Typography>
                <Typography variant="subtitle1">
                  Enter your email below to login to your account
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Email"
                  placeholder="Enter your email"
                />
                <TextField
                  fullWidth
                  label="Password"
                  placeholder="Enter your password"
                />
                <Button variant="contained" fullWidth>
                  Login
                </Button>
                <Button variant="outlined" fullWidth>
                  Login with Google
                </Button>
              </Stack>
              <Stack justifyContent={"center"} direction={"row"} alignItems={"center"}>
                <Typography variant="body2">Don't have an account?</Typography>
                <Link href="/signup">Sign up</Link>
              </Stack>
            </Stack>
          </CardContent>
          </Card>  
        </Stack>
        
      </Container>
    </Box>
  );
};

export default Login;
