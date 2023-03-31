import React from "react";
import navData from "./navData";
import { VerticalNav, Input } from "@innovaccer/design-system";

export const LeftPanel = () => {
  const [active, setActive] = React.useState({
    name: "Avatar",
  });

  const [data, setData] = React.useState(navData);

  const onClickHandler = (menu) => {
    setActive(menu);
  };

  const [value, setValue] = React.useState("");

  const onChange = React.useCallback((e) => {
    let filteredData = navData.filter((item) =>
      item.label.toLocaleLowerCase().includes(e.target.value)
    );
    setValue(e.target.value);
    setData(filteredData)
  }, []);

  const onClear = React.useCallback(() => {
    setValue("");
    setData(navData);
  }, []);

  return (
    <div>
      <Input
        name="input"
        onChange={onChange}
        onClear={onClear}
        placeholder="Search component"
        value={value}
        size="large"
        className="mb-3"
        icon="search"
      />
      <div className="vertical-nav-container bg-secondary-lightest page-scroll">
        <VerticalNav
          menus={data}
          active={active}
          onClick={onClickHandler}
          hoverable={false}
        />
      </div>
    </div>
  );
};

export default LeftPanel;
