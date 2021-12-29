//import React from 'react';
import { useEffect } from 'react';
//import PropTypes from 'prop-types';
import { StyledList, ListItem } from './ContactsList.styled';
import { ContactsListItem } from 'Components/ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import {
  getVisibleContacts,
  getLoading,
} from 'redux/contacts/contacts_selector';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts_operations';
import { Loader } from 'Components/Loader/Loader';

function ContactsList() {
  const dispatch = useDispatch();
  const Contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledList>
      {isLoading && <Loader />}
      {Contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <ContactsListItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContact(id))}
          />
        </ListItem>
      ))}
    </StyledList>
  );

  /*ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number:
        PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
*/
}
export { ContactsList };
