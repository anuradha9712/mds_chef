import React from "react";
import navData from "./navData";
import { VerticalNav } from "@innovaccer/design-system";

export const LeftPanel = () => {
  const [active, setActive] = React.useState({
    name: "Avatar",
  });

  const onClickHandler = (menu) => {
    console.log("menu-clicked: ", menu);
    setActive(menu);
  };
  return (
    <div
      data-test="Docs-Leftnav"
      id="navbar-container"
      class="h-80vh bg-secondary-lightest border-right page-scroll"
    >
      <VerticalNav
        menus={navData}
        active={active}
        onClick={onClickHandler}
        hoverable={false}
      />
    </div>
  );
};

export default LeftPanel;
