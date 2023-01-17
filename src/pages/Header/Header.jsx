import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
