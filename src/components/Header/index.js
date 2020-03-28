import React from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  // const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {}

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <NavLink to="/dashboard" activeClassName="active">
            ENCOMENDAS
          </NavLink>
          <NavLink to="/deliverymans" activeClassName="active">
            ENTREGADORES
          </NavLink>
          <NavLink to="/recipients" activeClassName="active">
            DESTINATÁRIOS
          </NavLink>
          <NavLink to="/deliveries-problems" activeClassName="active">
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
