import { Avatar, Badge, Box, styled, Typography } from "@mui/material";
import picture from "../../assets/react.svg";
import { AddAPhoto } from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Home = () => {
  return (
    <Box
      sx={{
        display: { md: "flex", sm: "block" },
        justifyContent: "space-around",
      }}
    >
      {/* left  side  */}

      <Box maxWidth="xs">
        <Typography textAlign="center" variant="h2">
          Welcome to th techtronix
        </Typography>
      </Box>

      {/* right side */}
      <Box
        maxWidth="xs"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="A"
            src={picture ? picture : ""}
            sx={{
              width: "100px",
              height: "100px",
            }}
          />
        </StyledBadge>

        <Avatar sx={{ bgcolor: "red" }}>
          <AddAPhoto />
        </Avatar>
      </Box>
    </Box>
  );
};

export default Home;
