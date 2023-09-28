/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Notification,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const gotoLocation = location.state?.from?.pathname || "/";
  console.log(gotoLocation);
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    loginUser(email, password)
      .then((result) => {
        const signedIn = result.user;
        toast("User Login Successfully");
        navigate(gotoLocation, { replace: true });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
    from.reset();
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        toast("Login Success");
        navigate(gotoLocation, { replace: true });
        setError("");
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <Container className="my-10">
      <Box className="md:w-[50%] shadow-md px-4 py-8 rounded w-full mx-auto mt-8">
        <Title order={3} mb="lg" className="text-center">
          Please Login{" "}
        </Title>
        <form className="space-y-5 " onSubmit={handleLogin}>
          <TextInput
            size="md"
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            name="email"
            required
          />
          <PasswordInput
            size="md"
            label="Password"
            withAsterisk
            required
            placeholder="Enter your Password"
            name="password"
            // error="Invalid Password"
          />
          <Button type="submit" fullWidth size="md">
            Login
          </Button>
          <p className="text-center text-blue-600">
            If you are New please?{" "}
            <Link
              to="/register"
              className="hover:underline no-underline text-red-600"
            >
              Register
            </Link>
          </p>
          <div>
            {error && (
              <Notification
                title="Firebase Error"
                color="red"
                classNames={{
                  inner: { color: "red" },
                }}
              >
                {error}
              </Notification>
            )}
          </div>
        </form>
        <Divider my="md" label="Or" labelPosition="center" />
        <Group grow>
          <Button
            leftSection={<FcGoogle />}
            variant="default"
            className="w-[50%]"
            onClick={handleGoogleSignIn}
          >
            Google Login
          </Button>
          <Button
            color="rgba(9, 186, 235, 1)"
            leftSection={<FaFacebook />}
            variant="default"
            className="w-[50%]"
          >
            Facebook
          </Button>
        </Group>
      </Box>
    </Container>
  );
};

export default Login;
