import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdAdd } from 'react-icons/md';

import { SearchField } from './styles';

export default function ContentHeader({ title = '' }) {
  return (
    <div>
      <SearchField>
        <MdSearch size={20} color="#999" />
        <input type="text" name="filter" placeholder={`Buscar por ${title}`} />
      </SearchField>
      <button type="button">
        <MdAdd size={24} />
        Cadastrar
      </button>
    </div>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
