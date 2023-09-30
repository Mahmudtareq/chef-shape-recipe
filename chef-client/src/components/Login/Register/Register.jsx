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
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const photo = from.photo.value;
    const password = from.password.value;
    const passwordPattern =
      /^(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "It must be at least 8 characters long and contain at least one digit and one special character."
      );
      return; // Prevent further execution if password format is invalid
    }
    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        updateUserProfile(newUser, name, photo);
        toast("User create successfully");
        navigate("/login");
        console.log(newUser);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
    from.reset();
  };
  const handleClose = () => {
    console.log("click");
  };
  const updateUserProfile = (user, name, photo) => {
    profileUpdate(user, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        console.log("profile update");
      })
      .catch((error) => {
        setError(error);
      });
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
            error={
              error && (
                <Notification
                  left={<AiOutlineClose onClick={handleClose} />}
                  color="red"
                  title="Validation Error"
                >
                  {error}
                </Notification>
              )
            }
          />
          <Group>
            <Checkbox
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
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
          <Button type="submit" fullWidth size="md" disabled={!checked}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
