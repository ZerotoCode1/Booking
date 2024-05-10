import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AuthLayout from "./layouts/AuthLayout";
// import SignIn from "./pages/Auth/SignIn";
// import SignUp from "./pages/Auth/SignUp";
// import Homelayout from "./layouts/Homelayout";
// import SlideBar from "./pages/Home/Slidebar";
// import Cart from "./pages/Home/Cart";
import routes from "./routers/routes";
import Privaterouter from "./routers/Privaterouter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route element={<Homelayout />}>
            <Route path="/slidebar" element={<SlideBar />} />
            <Route path="/cart" element={<Cart />} />
          </Route> */}
          {routes.map((route) => {
            return (
              <Route
                key={`${route.path}-layout `}
                element={
                  route.isPraviteRouter ? (
                    <Privaterouter>
                      <route.layout />
                    </Privaterouter>
                  ) : (
                    <route.layout />
                  )
                }
              >
                {route.routeChild.map((routeChild) => {
                  return (
                    <Route
                      key={routeChild.path}
                      path={routeChild.path}
                      element={<routeChild.component />}
                    />
                  );
                })}
              </Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
