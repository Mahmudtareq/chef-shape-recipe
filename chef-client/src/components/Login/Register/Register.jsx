/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Checkbox,
  Container,
  Group,
  Notification,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const photo = from.photo.value;
    const password = from.password.value;
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        toast(<Notification>User create successfully</Notification>);
        navigate("/login");

        console.log(newUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
    from.reset();
  };
  return (
    <Container className="my-10">
      <Box className="md:w-[55%] shadow-md px-6 py-8 rounded w-full mx-auto mt-8">
        <Title order={3} mb="lg" className="text-center">
          Create An New Account{" "}
        </Title>
        <form className="space-y-5 " onSubmit={handleRegister}>
          <TextInput
            size="md"
            withAsterisk
            label="Name"
            placeholder="Your Name"
            name="name"
            required
          />

          <TextInput
            size="md"
            withAsterisk
            label="Photo Url"
            placeholder="photo url"
            name="photo"
            required
          />
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
          <Group>
            <Checkbox
              defaultChecked
              label="I agree Terms & Conditions"
              size="sm"
            />
            <p className="text-center text-blue-600 ">
              You have a Account please?{" "}
              <Link
                to="/login"
                className="hover:underline no-underline text-red-600"
              >
                Login
              </Link>
            </p>
          </Group>
          <Button type="submit" fullWidth size="md">
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
