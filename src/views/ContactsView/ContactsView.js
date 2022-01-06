import { ContactsList } from 'Components/ContactList/ContactsList';
import { ContactForm } from 'Components/Form/Form';
import { Filter } from 'Components/Filter/Filter';
import { Container } from 'Components/Container/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/contacts_operations';
//import {} from './ContactsView.styled';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <Container>
      <div>
        <ContactForm />
        <Filter />
        <ContactsList />
      </div>
    </Container>
  );
}

export default ContactsView;
