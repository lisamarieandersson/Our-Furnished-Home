import { Box, Link } from "@mui/material";

const navigationLinks = [
  { name: "Products", href: "" },
  { name: "Brands", href: "" },
  { name: "Campaigns", href: "" },
];

function NavLinks() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
        {navigationLinks.map((item) => (
          <Link
            component="button"
            underline="none"
            href={item.href}
            sx={{
              display: { md: "block", xs: "none" },
              fontFamily: "Prata",
              fontSize: "1.3rem",
              color: "black",
            }}
          >
            {item.name}
          </Link>
        ))}
      </Box>
      <Box
        sx={{
          display: { md: "none", sm: "block" },
          paddingLeft: "1rem",
        }}
      >
        <span
          style={{ fontSize: "3rem" }}
          className="material-symbols-outlined"
        >
          menu
        </span>
      </Box>
    </div>
  );
}

export default NavLinks;
