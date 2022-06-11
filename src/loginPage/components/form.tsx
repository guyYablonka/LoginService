import React from "react";
import { Tile, Button, Input, Box } from "@rocket.chat/fuselage";
import { Rocketchat } from "@rocket.chat/sdk";
// @ts-ignore
import LoginServices from "./services.tsx";

const Form = () => {
  const login = async () => {
    // const conn = await driver.connect({
    //   host: "rockettar-rocketchat-tests.40.114.31.51.nip.io",
    // });
    // const myUserId = await api.login({ username: "guy", password: "123" });
    console.log("hi");

    const rocket = new Rocketchat({
      host: "https://rockettar-rocketchat-tests.40.114.31.51.nip.io",
    });

    console.log(rocket);
    rocket.methodCall("login", { username: "guy", password: "123" });
    // console.log(conn, myUserId);
  };

  return (
    <Tile h={250} w={520}>
      <Box is="form" w="100%" display="flex" flexDirection="column">
        <LoginServices />
        <Input
          marginBlock={5}
          type="text"
          placeholder='כתובת דוא"ל או שם משתמש'
        />
        <Input marginBlock={5} type="password" placeholder="סיסמה" />
        <Button marginBlock={10} info primary onClick={login}>
          התחברות עם סיסמה
        </Button>
      </Box>
    </Tile>
  );
};

export default Form;
