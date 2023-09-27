import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    from.reset();
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
            <Link to="/register" className="hover:underline no-underline text-red-600">
              Register
            </Link>
          </p>
        </form>
        <Divider my="md" label="Or" labelPosition="center" />
        <Group grow>
          <Button
            leftSection={<FcGoogle />}
            variant="default"
            className="w-[50%]"
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
