import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'Components/Form/Form.styled';

const ContactsListItem = ({
  id,
  name,
  number,
  onDeleteContact,
}) => (
  <>
    {name}: {number}
    <Button
      type="button"
      onClick={() =>
        onDeleteContact(id)
      }
    >
      Delete
    </Button>
  </>
);

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact:
    PropTypes.func.isRequired,
};

export { ContactsListItem };
