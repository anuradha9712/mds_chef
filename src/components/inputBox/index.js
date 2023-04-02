import React, { useState } from "react";
import { Input, Row, Button } from "@innovaccer/design-system";

export const InputBox = ({ onSubmitHandler, componentName, inputDisabled }) => {
  const [query, setQuery] = useState(componentName);

  let formatQuery = query && query.trim().length >= 1;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      formatQuery && onSubmitHandler(query);
      setQuery("");
    }
  };

  const submitHandler = () => {
    formatQuery && onSubmitHandler(query);
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
        placeholder="Enter your query here..."
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
