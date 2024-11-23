import { Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main role="main" className="main-wrapper" style={{ height: "100%" }}>
        {children}
      </main>
      <Footer />
    </Box>
  );
};

export default Layout;
