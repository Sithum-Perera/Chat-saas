import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Calendar,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
  Phone,
  VideoCamera,
} from "@phosphor-icons/react";
import { useState } from "react";

const ChatHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const handleToggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <Stack>
      <Stack
        sx={{ px: 3, py: 1 }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src={faker.image.avatar()} alt={faker.person.fullName()} />
          <Typography>{faker.person.fullName()}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0}>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton onClick={handleToggleSearch}>
            <MagnifyingGlass />
          </IconButton>
        </Stack>
      </Stack>
      {showSearch && (
        <>
          <Divider />
          <Stack
            sx={{ px: 1, py: 0.5 }}
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <IconButton>
              <Calendar />
            </IconButton>
            <TextField
              fullWidth
              size="small"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MagnifyingGlass />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton>
              <CaretLeft />
            </IconButton>
            <IconButton>
              <CaretRight />
            </IconButton>
            <Button onClick={handleToggleSearch} size="small" variant="contained">
              Done
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  );
};

const ChatWindow = () => {
  const theme = useTheme();

  return (
    <Stack direction="column" flexGrow={1} sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          borderRight: `1px solid ${theme.palette.divider}`,
          overflow: "hidden",
        }}
      >
        <ChatHeader />
        <Divider />
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          {/* Your chat content goes here */}
        </Box>
      </Box>
    </Stack>
  );
};

export default ChatWindow;
