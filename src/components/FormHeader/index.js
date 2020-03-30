import React from 'react';
import PropTypes from 'prop-types';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Container } from './styles';

export default function FormHeader({ title = '' }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <button id="return" type="button">
          <MdKeyboardArrowLeft size={24} />
          Voltar
        </button>
        <button type="submit">
          <MdCheck size={24} />
          Salvar
        </button>
      </div>
    </Container>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
};