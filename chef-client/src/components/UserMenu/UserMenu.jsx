import { Avatar, Menu, Tooltip } from "@mantine/core";
import Logout from "../Login/Logout/Logout";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const UserMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <Menu
      shadow="md"
      width={200}
      transitionProps={{ transition: "rotate-right", duration: 150 }}
    >
      <Menu.Target>
        <Tooltip
          label={user?.displayName}
          color="indigo"
          arrowOffset={19}
          arrowSize={6}
          withArrow
          position="top-start"
        >
          <Avatar
            // src={
            //   user.photoURL ? (
            //     <>{user.photoURL}</>
            //   ) : (
            //     "https://i.ibb.co/nMqWRDR/member-img-06.png"
            //   )
            // }
            src={user?.photoURL}
            alt="it's me"
          />
        </Tooltip>
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
