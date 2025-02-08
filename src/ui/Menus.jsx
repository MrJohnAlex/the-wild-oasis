import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenusContext = createContext();

const StyleLists = styled.ul`
  position: fixed;
  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyleButton = styled.button``;

const StyleToggle = styled.button``;

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const [position, setPosition] = useState(null);
  const open = setOpenId;
  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div>{children}</div>;
}
function Lists({ children, id }) {
  const { openId, close, position } = useContext(MenusContext);
  const ref = useOutsideClick(close);
  if (openId != id) return null;
  return createPortal(
    <StyleLists position={position} ref={ref}>
      {children}
    </StyleLists>,
    document.body
  );
}
function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
    openId === "" || openId != id ? open(id) : close();
  }
  return (
    <StyleToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyleToggle>
  );
}
function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyleButton onClick={handleClick}>
        {icon} <span>{children}</span>
      </StyleButton>
    </li>
  );
}

Menus.Menu = Menu;

Menus.Toggle = Toggle;
Menus.Lists = Lists;
Menus.Button = Button;

export default Menus;
