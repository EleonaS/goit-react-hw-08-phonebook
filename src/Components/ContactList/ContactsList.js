import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledList,
  ListItem,
} from './ContactsList.styled';
import { ContactsListItem } from 'Components/ContactListItem/ContactListItem';

const ContactsList = ({
  contacts,
  onDeleteContact,
}) => (
  <StyledList>
    {contacts.map(
      ({ name, number, id }) => (
        <ListItem key={id}>
          <ContactsListItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={
              onDeleteContact
            }
          />
        </ListItem>
      ),
    )}
  </StyledList>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number:
        PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export { ContactsList };
