import { ActionIcon, Anchor, Group } from "@mantine/core";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="">
      <Group gap="xs" mt="md">
        <Anchor href="https://www.google.co.in/" target="_blank">
          <ActionIcon
            variant="filled"
            color="rgba(43, 73, 171, 1)"
            size="lg"
            radius="xl"
            aria-label="facebook"
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
        <Anchor href="" target="_blank" size="">
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
  );
};

export default SocialMedia;
