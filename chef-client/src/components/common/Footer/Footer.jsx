/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { ActionIcon, Anchor, Box, Group, Text, Title } from "@mantine/core";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-400 py-8">
      <div className="mx-auto lg:px-20 px-8">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-2/5 mb-6 sm:mb-0 ">
            {/* Column 1 - Logo */}
            {/* <Group className="">
              <img
                src={logo} // Replace with your logo URL
                alt="Logo"
                className=" text-gray-50 h-20"
              />
            </Group> */}
            <Box className="mb-3">
              <Title mb={5} order={4} className="text-black ">About Company</Title>
              <Text className=" lg:text-start text-justify text-gray-300">
                Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                eiusmod tempor cididunt Lorem ipsum dolor sit amet, nempor in
                cididunt.
              </Text>
            </Box>
            <Group gap="xs">
              <Anchor href="" target="_blank">
                <ActionIcon
                  component="Link"
                  variant="filled"
                  color="rgba(43, 73, 171, 1)"
                  size="lg"
                  radius="xl"
                  aria-label="facebook"
                  to="/https://www.google.co.in/"
                >
                  <FaFacebookSquare className="text-white text-2xl mx-2 hover:text-black" />
                </ActionIcon>
              </Anchor>
              <Anchor href="" target="_blank">
                <ActionIcon
                  variant="filled"
                  color="rgba(43, 73, 171, 1)"
                  size="lg"
                  radius="xl"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-white text-2xl mx-2 hover:text-black" />
                </ActionIcon>
              </Anchor>
              <Anchor href="" target="_blank">
                <ActionIcon
                  variant="filled"
                  color="rgba(43, 73, 171, 1)"
                  size="lg"
                  radius="xl"
                  aria-label="instagram"
                >
                  <FaInstagram className="text-white text-2xl mx-2 hover:text-black" />
                </ActionIcon>
              </Anchor>
              <Anchor href="" target="_blank">
                <ActionIcon
                  variant="filled"
                  color="rgba(43, 73, 171, 1)"
                  size="lg"
                  radius="xl"
                  aria-label="linked in"
                >
                  <FaLinkedinIn className="text-white text-2xl mx-2 hover:text-black" />
                </ActionIcon>
              </Anchor>
            </Group>
          </div>
          {/* Map data array into columns 2, 3, and 4 */}
          {data.map((column, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/5 text-black">
              <Title order={4} mb={5} className="font-bold">{column.title}</Title>
              <ul>
                {column.links.map((linkItem, linkIndex) => (
                  <li key={linkIndex} className="mb-2 list-none">
                    <Link
                      to={linkItem.link}
                      className="text-black hover:text-gray-300 no-underline"
                    >
                      {linkItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
