import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

function HeaderMain() {
  return (
    <div>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          borderBottom: "0.05rem solid black",
          paddingBottom: "1rem",
          marginTop: "0.3rem",
        }}
      >
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-around",
              alignItems: "center",
              fontFamily: "Prata",
              fontSize: "1.7rem",
            }}
          >
            <li style={{ cursor: "pointer" }}>Products</li>
            <li style={{ cursor: "pointer" }}>Brands</li>
            <li style={{ cursor: "pointer" }}>Campaigns</li>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="LoggaFH.png"
              alt="logga"
              style={{
                height: "10rem",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "1rem",
            }}
          >
            <PersonOutlinedIcon
              sx={{
                fontSize: "3rem",
              }}
            />
            <FavoriteBorderOutlinedIcon
              sx={{
                fontSize: "3rem",
              }}
            />
            <ShoppingBagOutlinedIcon
              sx={{
                fontSize: "3rem",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeaderMain;
