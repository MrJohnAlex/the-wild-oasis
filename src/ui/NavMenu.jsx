import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import styled from "styled-components";

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: start;
`;

const StyleNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.2rem 2.4rem;
  font-size: 1.2rem;
  color: var(--color-grey-800);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-200);
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &.active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-indigo-600);
    color: var(--color-grey-0);
    box-shadow: var(--shadow-indigo);
  }
  & svg {
    font-size: 1.5rem;
  }
`;
export default function NavMenu() {
  return (
    <nav>
      <NavList>
        <li>
          <StyleNavLink to="dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyleNavLink>
        </li>
      </NavList>
    </nav>
  );
}
