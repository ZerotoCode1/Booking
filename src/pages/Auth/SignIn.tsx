import { Box, Button } from "@mui/material";
import { Form, Formik } from "formik";
import InputFiled from "../../components/Commonstyles/InputFile";
const initialValues = {
  email: "",
  password: "",
};
const SignIn = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <Box className="flex flex-col items-center justify-center w-1/3 py-8 px-8 mx-auto bg-white rounded-xl shadow-lg space-y-2">
              <Box className="w-full flex justify-start">
                <InputFiled
                  name="username"
                  label="Email"
                  defaultValue="Mat khau"
                  placeholder=""
                />
                <Button
                  className="text-left flex-start" // Đặt chiều rộng của button là 100% và căn trái nội dung
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ justifyContent: "flex-start" }} // Căn trái nội dung của button trong style
                >
                  Đăng nhập
                </Button>
              </Box>
              <Box className="w-full flex justify-end">
                <Button
                  className=" text-left" // Đặt chiều rộng của button là 100% và căn trái nội dung
                  variant="outlined"
                >
                  Sfsdfsdfds
                </Button>
              </Box>
              <Button
                className=" text-left" // Đặt chiều rộng của button là 100% và căn trái nội dung
                variant="outlined"
              >
                quangquac
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignIn;
