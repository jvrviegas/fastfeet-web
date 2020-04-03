import React from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <NavLink to="/dashboard/orders" activeClassName="active">
            ENCOMENDAS
          </NavLink>
          <NavLink to="/dashboard/deliverymans" activeClassName="active">
            ENTREGADORES
          </NavLink>
          <NavLink to="/dashboard/recipients" activeClassName="active">
            DESTINATÁRIOS
          </NavLink>
          <NavLink to="/dashboard/deliveries-problems" activeClassName="active">
            PROBLEMAS
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <button type="button" onClick={handleSignOut}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
