import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'Components/Form/Form.styled';

const ContactsListItem = ({ id, name, phone, onDeleteContact }) => (
  <>
    {name}: {phone}
    <Button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </Button>
  </>
);

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export { ContactsListItem };
