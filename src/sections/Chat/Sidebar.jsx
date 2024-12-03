import {
  Avatar,
  Badge,
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
  CaretDown,
  CaretRight,
  FunnelSimple,
  Hash,
  LockSimple,
  MagnifyingGlass,
  Plus,
} from "@phosphor-icons/react";
import { useState } from "react";
import { faker } from "@faker-js/faker";

const GROUPS = [
  {
    key: 0,
    id: 0,
    title: "general",
    isPrivate: true,
  },
  {
    key: 1,
    id: 1,
    title: "help",
    isPrivate: false,
  },
  {
    key: 2,
    id: 2,
    title: "doubts",
    isPrivate: true,
  },
  {
    key: 3,
    id: 3,
    title: "discussion",
    isPrivate: false,
  },
];

const DMS = [
  {
    key: 0,
    id: 0,
    name: faker.person.fullName(),
    unreadCount: 2,
    avatar: faker.image.avatar(),
  },
  {
    key: 1,
    id: 1,
    name: faker.person.fullName(),
    unreadCount: 1,
    avatar: faker.image.avatar(),
  },
  {
    key: 2,
    id: 2,
    name: faker.person.fullName(),
    unreadCount: 3,
    avatar: faker.image.avatar(),
  },
];

const CollapseButtonStyle = styled(Button)(({ theme }) => ({
  ...theme.typography.overline,
  height: 40,
  borderRadius: 0,
  padding: theme.spacing(1, 2),
  justifyContent: "space-between",
  color: theme.palette.text.disabled,
}));

const Sidebar = () => {
  const theme = useTheme();

  const [showChannels, setShowChannels] = useState(true);
  const [showDMs, setShowDMs] = useState(true);
  const [selectedConversation, setSelectedConversation] = useState({
    type: "dm",
    id: 0,
  });

  const onCollapseChannels = () => {
    setShowChannels((prev) => !prev);
  };
  const onCollapseDMs = () => {
    setShowDMs((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: 300,
        py: 4,
        px: 2,
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Tooltip title="Search">
            <IconButton>
              <MagnifyingGlass size={20} weight="bold" />
            </IconButton>
          </Tooltip>
          <Stack direction={"row"} spacing={1}>
            <Tooltip title="Filter">
              <IconButton>
                <FunnelSimple size={20} weight="bold" />
              </IconButton>
            </Tooltip>
            <Tooltip title="New Conversation">
              <IconButton>
                <Plus size={20} weight="bold" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
        <CollapseButtonStyle
          fullWidth
          color="inherit"
          onClick={onCollapseChannels}
          endIcon={showChannels ? <CaretDown /> : <CaretRight />}
        >
          Channels
        </CollapseButtonStyle>
        <Collapse in={showChannels}>
          <Box sx={{ px: 2.5, pb: 1 }}>
            <Stack spacing={1}>
              {GROUPS.map(({ key, title, isPrivate, id }) => (
                <Stack
                  direction="row"
                  key={key}
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    p: 1,
                    borderRadius: 1,
                    bgcolor:
                      selectedConversation.type === "group" &&
                      selectedConversation.id === id
                        ? theme.palette.grey[700]
                        : "initial",
                    "&:hover": {
                      cursor: "pointer",
                      bgcolor: theme.palette.grey[200],
                    },
                  }}
                  onClick={() => {
                    setSelectedConversation({ type: "group", id });
                  }}
                >
                  <Stack
                    direction="row"
                    key={key}
                    alignItems="center"
                    spacing={1}
                  >
                    <Hash />
                    <Typography variant="subtitle2">{title}</Typography>
                  </Stack>
                  {isPrivate && <LockSimple />}
                </Stack>
              ))}
            </Stack>
          </Box>
        </Collapse>
        <Divider />
        <CollapseButtonStyle
          fullWidth
          color="inherit"
          onClick={onCollapseDMs}
          endIcon={showDMs ? <CaretDown /> : <CaretRight />}
        >
          Direct Messages
        </CollapseButtonStyle>
        <Collapse in={showDMs}>
          <Box sx={{ px: 2.5, pb: 1 }}>
            <Stack spacing={1}>
              {DMS.map(({ key, id, avatar, unreadCount, name }) => (
                <Stack
                  direction="row"
                  key={key}
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    p: 1,
                    borderRadius: 1,
                    bgcolor:
                      selectedConversation.type === "dm" &&
                      selectedConversation.id === id
                        ? theme.palette.grey[700]
                        : "initial",
                    "&:hover": {
                      cursor: "pointer",
                      bgcolor: theme.palette.grey[200],
                    },
                  }}
                  onClick={() => {
                    setSelectedConversation({ type: "dm", id });
                  }}
                >
                  <Stack
                    direction="row"
                    key={key}
                    alignItems="center"
                    spacing={1}
                  >
                    <Avatar
                      sx={{ width: 25, height: 25 }}
                      src={avatar}
                      alt={name}
                    />
                    <Typography variant="subtitle2">{name}</Typography>
                  </Stack>
                  <Badge
                    sx={{ mr: 1 }}
                    color="primary"
                    variant="standard"
                    badgeContent={unreadCount}
                  />
                </Stack>
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Stack>
    </Box>
  );
};

export default Sidebar;
