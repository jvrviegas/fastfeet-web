import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Pagination({ page, previous, next }) {
  return (
    <Container>
      <button type="button" onClick={previous}>
        Anterior
      </button>
      <span>Página {page}</span>
      <button type="button" onClick={next}>
        Próxima
      </button>
    </Container>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};
