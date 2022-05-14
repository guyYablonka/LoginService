import { Tile, Button, Input, Box } from "@rocket.chat/fuselage";
// @ts-ignore
import LoginServices from "./services.tsx";

const Form = () => {
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
        <Button marginBlock={10} info primary>
          התחברות עם סיסמה
        </Button>
      </Box>
    </Tile>
  );
};

export default Form;
