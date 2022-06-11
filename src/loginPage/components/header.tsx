import React from "react";
import { Box } from "@rocket.chat/fuselage";
import { ReactComponent as ReactLogo } from "../../images/logo.svg";
const Header = () => {
  return (
    <header>
      <Box is="a" className="logo" href="/">
        <ReactLogo height={100} width={500} />
      </Box>
    </header>
  );
};

export default Header;
