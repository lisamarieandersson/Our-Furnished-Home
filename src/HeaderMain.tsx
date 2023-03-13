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
              fontFamily: 'Prata',
              fontSize: "1.3rem",
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
                height: "8rem",
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
              gap: "0.7rem",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "3.5rem", cursor: "pointer" }}
            >
              admin_panel_settings
            </span>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "3.5rem", cursor: "pointer" }}
            >
              favorite
            </span>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "3.5rem", cursor: "pointer" }}
            >
              shopping_bag
            </span>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeaderMain;
