/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, ActionsList, MoreActions, Action } from './styles';

export default function ActionsButton({ actions, larger }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <MoreActions onClick={handleToggleVisible}>
        <MdMoreHoriz color="#C6C6C6" size={20} />
      </MoreActions>

      <ActionsList visible={visible} larger={larger}>
        <div>
          {actions.map((action) =>
            action === 'Visualizar' ? (
              <Action>
                <MdVisibility size={16} color="#8E5BE8" />
                <span>{action}</span>
              </Action>
            ) : action === 'Editar' ? (
              <Action>
                <MdCreate size={16} color="#4D85EE" />
                <span>{action}</span>
              </Action>
            ) : (
              <Action>
                <MdDeleteForever size={16} color="#DE3B3B" />
                <span>{action}</span>
              </Action>
            )
          )}
        </div>
      </ActionsList>
    </Container>
  );
}

ActionsButton.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.string).isRequired,
  larger: PropTypes.bool,
};

ActionsButton.defaultProps = {
  larger: false,
};
