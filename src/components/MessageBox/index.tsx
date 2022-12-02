import React from "react";
// import Select from "react-select";
import { Textarea, Box, Button, Select } from "@chakra-ui/react";

import { fetchAllUsers } from "@/http/users";
import useSocket from "@/hooks/useSocket";
import useAuth from "@/hooks/useAuth";

const MessageBox = () => {
  const [userList, setUserList] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState({
    email: null,
    msg: "",
  });
  const { socket } = useSocket();
  const { email } = useAuth();

  React.useEffect(() => {
    fetchAllUsers()
      .then((res) =>
        setUserList(
          res.data
            .map((x: any) => ({ label: x.email, value: x.email }))
            .filter((x: any) => x.value !== email)
        )
      )
      .catch((err) => console.log(err));
  }, [email]);

  const handleSendMessage = () => {
    if (!selectedUser.email) return;
    console.log(socket);

    socket?.emit("sendNotification", {
      senderName: email,
      receiverName: selectedUser.email,
      msg: selectedUser.msg,
    });
  };

  return (
    <Box display="flex" flexDirection="column" gap={6}>
      List of availabe users
      <Select
        onChange={({ value }: any) =>
          setSelectedUser((prev) => ({ ...prev, email: value }))
        }
        placeholder="Select a user"
      >
        {userList.map((x: any, i: number) => {
          return (
            <option value={x.value} key={i}>
              {x.label}
            </option>
          );
        })}
      </Select>
      <Box>
        <Box mb={2}>Write your msg here</Box>
        <Textarea
          name="email"
          value={selectedUser.msg}
          onChange={(e) =>
            setSelectedUser((prev) => ({ ...prev, msg: e.target.value }))
          }
        />
      </Box>
      <Button
        borderRadius={0}
        type="submit"
        variant="solid"
        width="50%"
        loadingText="Loggingin..."
        onClick={handleSendMessage}
        colorScheme="teal"
      >
        Send Message
      </Button>
    </Box>
  );
};

export default MessageBox;
