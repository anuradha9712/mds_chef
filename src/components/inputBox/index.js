import { Input, Row, Button } from "@innovaccer/design-system";
import React from "react";

export const InputBox = () => {
  return (
    <Row>
      <Input
        name="input"
        // className="w-25"
        // value={value}
        // onChange={onChange}
        placeholder="query"
      />
      <Button
        // appearance="primary"
        aria-label="Submit your response"
        size="regular"
      >
        Sent
      </Button>
    </Row>
  );
}

export default InputBox;
