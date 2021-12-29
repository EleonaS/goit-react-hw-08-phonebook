//import { useState } from 'react';
//import useLocalStorage from 'hooks/useLocalStorage';
//import { nanoid } from 'nanoid';
import { Section } from 'Components/Section/Section';
import { Container } from 'Components/Container/Container';
import { Title } from 'Components/Title/Title';
import { ContactForm } from 'Components/Form/Form';
import { Filter } from 'Components/Filter/Filter';
import { ContactsList } from 'Components/ContactList/ContactsList';
import {
  //toast,
  Toaster,
} from 'react-hot-toast';

function App() {
  return (
    <>
      <Section>
        <Container>
          <Title title={`Phonebook`} />
          <ContactForm />
          <Toaster />
          <Title title={`Contacts`} />
          <Filter />
          <ContactsList />
        </Container>
      </Section>
    </>
  );
}

export default App;
