import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import { Button } from "@mantine/core";

const Logout = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      // eslint-disable-next-line no-unused-vars
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Button onClick={handleLogOut} fullWidth variant="outline">
        Logout
      </Button>
    </div>
  );
};

export default Logout;
