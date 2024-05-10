import { Navigate } from "react-router-dom";

const Privaterouter = (props: { children: any }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/sign-in" />;
  } else {
    return props.children;
  }
};

export default Privaterouter;
