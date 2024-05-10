import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
function AuthLayout() {
  return (
    <Box
      style={{ width: "100vw", height: "100vh" }}
      className="flex justify-center items-center"
    >
      <Box className="w-full">
        <Outlet />
      </Box>
    </Box>
  );
}

export default AuthLayout;
