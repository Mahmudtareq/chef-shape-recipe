import { Avatar, Menu } from "@mantine/core";
import Logout from "../Login/Logout/Logout";

const UserMenu = () => {
  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
    >
      <Menu.Target>
        <Avatar
          src="https://i.ibb.co/nMqWRDR/member-img-06.png"
          alt="it's me"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>DashBoard</Menu.Item>
        <Menu.Item>
          <Logout />
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
