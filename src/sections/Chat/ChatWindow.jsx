import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { DateCalendar } from "@mui/x-date-pickers";
import {
  BellSimpleSlash,
  Calendar,
  CaretLeft,
  CaretRight,
  File,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  SmileyWink,
  VideoCamera,
} from "@phosphor-icons/react";
import { useState } from "react";
import UserProfile from "./UserProfile";
import EmojiPicker from "../../components/EmojiPicker";
import StyledBadge from "../../components/StyledBadge";

const ChatHeader = ({ toggleUserProfile }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickCal = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseCal = () => {
    setAnchorEl(null);
  };
  const openCal = Boolean(anchorEl);
  const id = openCal ? "cal-" : undefined;
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
        <Stack
          onClick={toggleUserProfile}
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            variant="dot"
            color="primary"
          >
            <Avatar src={faker.image.avatar()} alt={faker.person.fullName()} />
          </StyledBadge>
          <Stack>
            <Typography variant="subtitle2">
              {faker.person.fullName()}
            </Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0}>
          <IconButton>
            <BellSimpleSlash />
          </IconButton>
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
            <IconButton onClick={handleClickCal}>
              <Calendar />
            </IconButton>
            <Popover
              id={id}
              open={openCal}
              anchorEl={anchorEl}
              onClose={handleCloseCal}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <DateCalendar />
            </Popover>
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
            <Button
              onClick={handleToggleSearch}
              size="small"
              variant="contained"
            >
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

  const [showUserProfile, setShowUserProfile] = useState(false);
  const handleToggleUserProfile = () => {
    setShowUserProfile((prev) => !prev);
  };

  return (
    <Stack direction="row" flexGrow={1} sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flexGrow: 1,
          borderRight: `1px solid ${theme.palette.divider}`,
        }}
      >
        <ChatHeader toggleUserProfile={handleToggleUserProfile} />
        <Divider />

        {/* Messages */}
        <Box
          sx={{
            flexGrow: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"flex-end"}
            justifyContent={"flex-start"}
          >
            <Box
              sx={{
                p: 2,
                borderRadius: 1,
                bgcolor: (theme) => theme.palette.grey[100],
                boxShadow: (theme) => theme.shadows[1],
                //color:(theme) => theme.palette.primary.contrastText,
              }}
            >
              <Typography variant="body2">
                Hi, I am just testing this msg section.
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"flex-end"}
          >
            <Box
              sx={{
                p: 2,
                borderRadius: 1,
                bgcolor: (theme) => theme.palette.grey[100],
                boxShadow: (theme) => theme.shadows[1],
                //color:(theme) => theme.palette.primary.contrastText,
              }}
            >
              <Typography variant="body2">
                Hi, I am just testing this msg section.
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Sending Messages */}
        <Box
          sx={{
            p: 2,
            border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
            borderRadius: 1,
            boxShadow: theme.shadows[24],
          }}
        >
          <Stack spacing={2}>
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              variant="standard"
              sx={{
                outline: "none",
                border: "none",
              }}
            />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <EmojiPicker />
                <IconButton>
                  <File size={18} />
                </IconButton>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Button variant="contained" startIcon={<PaperPlaneTilt />}>
                  SEND
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
      {showUserProfile && <UserProfile onClose={handleToggleUserProfile} />}
    </Stack>
  );
};

export default ChatWindow;
