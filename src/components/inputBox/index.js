import React, { useState } from "react";
import { Input, Row, Button } from "@innovaccer/design-system";

export const InputBox = ({ onSubmitHandler }) => {
  const [query, setQuery] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmitHandler(query);
    }
  };
  return (
    <Row>
      <Input
        name="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query here"
        onKeyPress={handleKeyPress}
      />
      <Button
        size="regular"
        aria-label="Submit your response"
        onClick={() => onSubmitHandler(query)}
      >
        Sent
      </Button>
    </Row>
  );
};

export default InputBox;
