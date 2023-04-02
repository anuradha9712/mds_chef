import React, { useState } from "react";
import { Input, Row, Button } from "@innovaccer/design-system";

export const InputBox = ({ onSubmitHandler, componentName, inputDisabled }) => {
  const [query, setQuery] = useState(componentName);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmitHandler(query);
      setQuery("");
    }
  };

  const submitHandler = () => {
    onSubmitHandler(query);
    setQuery("");
  }

  return (
    <Row className="input-box">
      <Input
        size="large"
        name="input"
        value={query}
        autoComplete="off"
        disabled={inputDisabled}
        onKeyPress={handleKeyPress}
        placeholder="Enter your query here"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        icon="send"
        size="large"
        className="ml-3"
        iconAlign="left"
        appearance="primary"
        onClick={submitHandler}
        disabled={query === "" || !query}
        aria-label="Submit your response"
      ></Button>
    </Row>
  );
};

export default InputBox;
