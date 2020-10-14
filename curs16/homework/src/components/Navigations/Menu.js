import React from "react";

import SideMenu from "./Menus/SideMenu";
import SideMenuItem from "./Menus/SideMenuItem";

const Menu = (props) => (
  <SideMenu isOpen={props.isOpen} toggleMenu={props.toggleMenu}>
    <h4>
      Next Courses
      <button
        className="btn-link"
        onClick={() => props.toggleMenu()}
        style={{ cursor: "pointer" }}
      >
        <i className="fa fa-close pull-right" />
      </button>
    </h4>
    <SideMenuItem link="https://github.com/Cosmin26/web-development-course/blob/master/C17%20-%20Events%20Forms%20and%20Lists/README.md">
      Events
    </SideMenuItem>
    <SideMenuItem link="https://github.com/Cosmin26/web-development-course/blob/master/C17%20-%20Events%20Forms%20and%20Lists/README.md">
      Forms
    </SideMenuItem>
    <SideMenuItem link="https://github.com/Cosmin26/web-development-course/blob/master/C17%20-%20Events%20Forms%20and%20Lists/README.md">
      Lists
    </SideMenuItem>
    <SideMenuItem link="https://github.com/Cosmin26/web-development-course/blob/master/C18%20-%20Hooks/README.md">
      Hooks
    </SideMenuItem>
  </SideMenu>
);

export default Menu;
