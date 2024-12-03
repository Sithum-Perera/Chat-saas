import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Button, Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { BellSimpleSlash, CaretRight, CopySimple, Envelope, EnvelopeSimple, File, Image, Link, Phone, Prohibit, VideoCamera, X } from "@phosphor-icons/react";
import { faker } from "@faker-js/faker";

const UserProfile = ({ onClose }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height:'100vh',
        overflowY:'scroll',
        width: 320,
        borderLeft: `1px solid ${theme.palette.divider}`,
        display: "flex",
        flexDirection: "column",
        rowGap: 3,
      }}
    >
      <Stack>
        <Stack
          sx={{ py: 1, px: 2 }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6">Profile</Typography>
          <IconButton onClick={onClose}>
            <X />
          </IconButton>
        </Stack>
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Avatar sx={{width:150,height:150}} src={faker.image.avatar()} alt={faker.person.fullName()} />
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"} spacing={2} sx={{
        px:2
      }}>        <Typography variant="subtitle2">
            {faker.person.fullName()}
        </Typography>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <IconButton><Phone/></IconButton>
            <IconButton><VideoCamera/></IconButton>
        </Stack>
      </Stack>
      <Divider/>
      <Stack direction={"column"} spacing={3} px={2}>
        <Typography variant="subtitle2">
            Contact Information
        </Typography>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction={"row"} spacing={2}>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    px:2,
                    py:0,
                    borderRadius:1,
                    bgcolor:(theme) => theme.palette.grey[200],
                }}>
                    <EnvelopeSimple/>
                </Box>
                <Stack>
                    <Typography variant="caption">Email Address</Typography>
                    <Typography variant="caption">Abc@gmail.com</Typography>
                </Stack>
            </Stack>
            <Tooltip title="Copy email">
                <IconButton size="small" style={{height:'32px'}}>
                    <CopySimple/>
                </IconButton>
            </Tooltip>
        </Stack>
      </Stack>
      <Divider/>
      {/* Shared fille and Doc */}
        <Stack sx={{
            px:2,
            py:1,
            '&:hover':{
                bgcolor: (theme) => theme.palette.grey[200],
                cursor:"pointer",
            }
        }} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <File/>
                <Typography variant="overline" color="text.secondary">
                    Files & Document
                </Typography>
            </Stack>
            <CaretRight/>
        </Stack>
      {/* Shared Media */}
        <Stack sx={{
            px:2,
            py:1,
            '&:hover':{
                bgcolor: (theme) => theme.palette.grey[200],
                cursor:"pointer",
            }
        }} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Image/>
                <Typography variant="overline" color="text.secondary">
                    Media
                </Typography>
            </Stack>
            <CaretRight/>
        </Stack>
      {/* Shared Link */}
        <Stack sx={{
            px:2,
            py:1,
            '&:hover':{
                bgcolor: (theme) => theme.palette.grey[200],
                cursor:"pointer",
            }
        }} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <Link/>
                <Typography variant="overline" color="text.secondary">
                    Links
                </Typography>
            </Stack>
            <CaretRight/>
        </Stack>

      <Stack sx={{pb:2}} spacing={2} px={2} alignItems={"center"}>
        <Button startIcon={<BellSimpleSlash/>} color="info" variant="outlined" fullWidth>
            Mute Notification
        </Button>
        <Button startIcon={<Prohibit/>} color="error" variant="outlined" fullWidth>
            Block
        </Button>
      </Stack>
    </Box>
  );
};

export default UserProfile;
