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
  
  const Signup = () => {
    return (
      <Box sx={{height:'100vh'}}>
        <Container maxWidth="sm" sx={{height:1}}>
          <Stack sx={{height:1,alignItems:"center",justifyContent:"center"}}>
            <Card>
            <CardContent>
              <Stack spacing={3}>
                <Stack spacing={2}>
                  <Typography variant="h5">Signup</Typography>
                  <Typography variant="subtitle1">
                    Enter your information to create your account
                  </Typography>
                </Stack>
                <Stack spacing={2}>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                       <TextField
                    fullWidth
                    label="First Name"
                    placeholder="Enter your first name"
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    placeholder="Enter your last name"
                  /> 
                    </Stack>
                  
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
                    Signup
                  </Button>
                  <Button variant="outlined" fullWidth>
                    Signup with Google
                  </Button>
                </Stack>
                <Stack justifyContent={"center"} direction={"row"} alignItems={"center"}>
                  <Typography variant="body2">Already have an account?</Typography>
                  <Link href="/login">Login</Link>
                </Stack>
              </Stack>
            </CardContent>
            </Card>  
          </Stack>
          
        </Container>
      </Box>
    );
  };
  
  export default Signup;
  