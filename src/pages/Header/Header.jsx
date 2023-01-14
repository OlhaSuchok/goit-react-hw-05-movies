import { Outlet } from 'react-router-dom';
import { MainHeader, NavLinkItem, NavLinkButton } from './Header.styled';

export default function Header() {
  return (
    <div>
      <MainHeader>
        <NavLinkButton>
          <NavLinkItem to="/">Home</NavLinkItem>
        </NavLinkButton>
        <NavLinkButton>
          <NavLinkItem to="/movies">Movie</NavLinkItem>
        </NavLinkButton>
      </MainHeader>
      <Outlet />
    </div>
  );
}
