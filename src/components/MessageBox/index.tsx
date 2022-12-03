import React from "react";
// import Select from "react-select";
import { Textarea, Box, Button, Select } from "@chakra-ui/react";
import Axios from "axios";

import { fetchAllUsers } from "@/http/users";
import useSocket from "@/hooks/useSocket";
import useAuth from "@/hooks/useAuth";
import { createNotification } from "@/http/notification";

const MessageBox = () => {
  const [userList, setUserList] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState({
    email: null,
    msg: "",
  });
  const { socket } = useSocket();
  const { email } = useAuth();

  React.useEffect(() => {
    const source = Axios.CancelToken.source();

    fetchAllUsers(source)
      .then((res) =>
        setUserList(
          res.data
            .map((x: any) => ({ label: x.email, value: x.email }))
            .filter((x: any) => x.value !== email)
        )
      )
      .catch((err) => console.log(err));

    return () => {
      source.cancel();
    };
  }, [email]);

  const handleSendMessage = () => {
    if (!selectedUser.email) return;
    setLoader(true);

    const data = {
      message: selectedUser.msg,
      receiver_email: selectedUser.email,
      sender_email: email,
    };

    createNotification(data)
      .then(() => {
        socket?.emit("sendNotification", {
          senderName: email,
          receiverName: selectedUser.email,
          msg: selectedUser.msg,
        });
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  return (
    <Box display="flex" flexDirection="column" gap={6}>
      List of availabe users
      <Select
        onChange={(e: any) =>
          setSelectedUser((prev) => ({ ...prev, email: e.target.value }))
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
        isLoading={loader}
        loadingText="Sending..."
        type="submit"
        variant="solid"
        width="50%"
        onClick={handleSendMessage}
        colorScheme="teal"
      >
        Send Message
      </Button>
    </Box>
  );
};

export default MessageBox;
