import React from "react";
import ListLi from "./ListLi";
import { subMenuLinkData } from "../../data/Data";

function SubNavbar() {
  return (
    <div className="bg-[#282A35]">
      <ul className="flex gap-1">
        <ListLi text="html" />
        <ListLi text="css" />
        <ListLi text="javascript" />
        <ListLi text="sql" />
        <ListLi text="python" />
        <ListLi text="java" />
        <ListLi text="php" />
        <ListLi text="how to" />
        <ListLi text="w3.css" />
        <ListLi text="c" />
        <ListLi text="c++" />
        <ListLi text="c#" />
        <ListLi text="bootstrap" />
        <ListLi text="react" />
        <ListLi text="mysqal" />
        <ListLi text="jquery" />
        <ListLi text="excel" />
        
{/* 
        {subMenuLinkData.map(({ text, path }, index) => {
          return (
            <li key={index}>
              <NavLink to={path}>{text}</NavLink>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
}

export default SubNavbar;
