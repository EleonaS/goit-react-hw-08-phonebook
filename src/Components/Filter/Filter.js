import React from 'react';
//import PropTypes from 'prop-types';
import {
  Label,
  Input,
} from './Filter.styled';

import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts_selector';
import { changeFilter } from '../../redux/contacts/contact_actions';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = e =>
    dispatch(
      changeFilter(e.target.value),
    );

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder=""
      />
    </Label>
  );

  //Filter.propTypes = {
  //  filter: PropTypes.string,
  //  };
}

export { Filter };
