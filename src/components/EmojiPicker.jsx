import { styled, useTheme } from "@mui/material/styles";
import { ClickAwayListener, IconButton, Box } from "@mui/material";
import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Smiley } from "@phosphor-icons/react";

const RootStyle = styled(Box)({
  position: "relative",
});

const PickerStyle = styled("div")(({ theme }) => ({
  bottom: 40,
  overflow: "hidden",
  position: "absolute",
  left: theme.spacing(-2),
  //boxShadow: theme.customShadows.z20,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  "& .emoji-mart": {
    border: "none",
    backgroundColor: theme.palette.background.paper,
  },
  "& .emoji-mart-anchor": {
    color: theme.palette.text.disabled,
    "&:hover, &:focus, &.emoji-mart-anchor-selected": {
      color: theme.palette.text.primary,
    },
  },
  "& .emoji-mart-bar": { borderColor: theme.palette.divider },
  "& .emoji-mart-search input": {
    backgroundColor: "transparent",
    color: theme.palette.text.primary,
    borderColor: theme.palette.grey[500_32],
    "&::placeholder": {
      ...theme.typography.body2,
      color: theme.palette.text.disabled,
    },
  },
  "& .emoji-mart-search-icon svg": {
    opacity: 1,
    fill: theme.palette.text.disabled,
  },
  "& .emoji-mart-category-label span": {
    ...theme.typography.subtitle2,
    //...cssStyles().bgBlur({ color: theme.palette.background.paper }),
    color: theme.palette.text.primary,
  },
  "& .emoji-mart-title-label": { color: theme.palette.text.primary },
  "& .emoji-mart-category .emoji-mart-emoji:hover:before": {
    backgroundColor: theme.palette.action.selected,
  },
  "& .emoji-mart-emoji": { outline: "none" },
  "& .emoji-mart-preview-name": {
    color: theme.palette.text.primary,
  },
  "& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon": {
    color: theme.palette.text.secondary,
  },
}));

const EmojiPicker = ({ disabled, value, setValue, alignRight = false, ...other }) => {
  const theme = useTheme();
  const [emojiPickerState, setEmojiPickerAway] = useState(false);

  const triggerPicker = (event) => {
    event.preventDefault();
    setEmojiPickerAway(true);
  };
  const handleClickAway = () => {
    setEmojiPickerAway(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <RootStyle {...other}>
        {emojiPickerState && (
          <PickerStyle
            sx={{
              ...(alignRight && {
                right: -2,
                left: "auto !important",
              }),
            }}
          >
            <Picker
              data={data}
              theme={theme.palette.mode}
              onEmojiSelect={(emoji) => setValue(value + emoji.native)}
            />
          </PickerStyle>
        )}
        <IconButton disabled={disabled} size="small" onClick={triggerPicker}>
          <Smiley />
        </IconButton>
      </RootStyle>
    </ClickAwayListener>
  );
};

export default EmojiPicker;
