import React from "react";
import { Box } from "@rocket.chat/fuselage";
// @ts-ignore
import Header from "./header.tsx";
// @ts-ignore
import Form from "./form.tsx";

const Layout = () => {
  return (
    <Box>
      <Header /> <Form />
    </Box>
  );
};

export default Layout;
