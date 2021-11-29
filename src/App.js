import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { Section } from 'Components/Section/Section';
import { Container } from 'Components/Container/Container';
import { Title } from 'Components/Title/Title';
import { ContactForm } from 'Components/Form/Form';
import { Filter } from 'Components/Filter/Filter';
import { ContactsList } from 'Components/ContactList/ContactsList';
import toast, {
  Toaster,
} from 'react-hot-toast';
//!!!!  хуки должны быть на верхней облатси видимости (без if)

//-----2вариант------переиспользуемый хук
//1:07

function App() {
  const defaultContactsList = [
    {
      id: 'id-1',
      name: 'Rosie Simpson',
      number: '459-12-56',
    },
    {
      id: 'id-2',
      name: 'Hermione Kline',
      number: '443-89-12',
    },
    {
      id: 'id-3',
      name: 'Eden Clements',
      number: '645-17-79',
    },
    {
      id: 'id-4',
      name: 'Annie Copeland',
      number: '227-91-26',
    },
  ];
  const [contacts, setContacts] =
    useLocalStorage(
      'contact',
      defaultContactsList,
    );
  const [filter, setFilter] =
    useState('');

  /////1вариант --------
  //58min
  //1:03  ленивая инициализация состояния = улучшили производительность (если начальное состояние зависит от выражения - делать ленивую иниц. ()=> function()  )
  /*  const [contacts, setContacts] = useState(() => JSON.parse(
          window.localStorage.getItem('contacts')) ?? []);
      const [filter, setFilter] = useState('');*/

  /*  /*Contacts &&
          this.setState({
            contacts: Contacts,
          });*/
  /*/return Contacts;
     };*/

  /*  useEffect(() => {
        console.log('запускается useEffect' + Date.now())
      // contacts !== [] 
        window.localStorage.setItem(
        'contacts',JSON.stringify(
              (contacts),
            ),
        );
      }, [contacts]);*/
  //-------------

  function checkContact(name, number) {
    //const { contacts } = this.state;
    const includedName = contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        name.toLowerCase(),
    );

    const includedNumber =
      contacts.find(
        contact =>
          contact.number.replace(
            /[^0-9]/g,
            '',
          ) ===
          number.replace(/[^0-9]/g, ''),
      );

    if (includedName) {
      return toast(
        `${name} is already in contacts`,
      );
    }

    if (includedNumber) {
      return toast(
        `${number} is already in contacts`,
      );
    }
  }
  //
  function handleFormSubmit({
    name,
    number,
  }) {
    const includedContact =
      checkContact(name, number);

    if (includedContact) {
      return;
    }
    const id = nanoid();

    setContacts(prev => [
      ...prev,
      { id, name, number },
    ]);
  }
  //
  function handleChangeFilter(e) {
    const { value } = e.currentTarget;
    setFilter(value);
    /*this.setState({
            filter: e.currentTarget.value,
          });*/
  }
  //
  function deleteContact(contactId) {
    setContacts(
      contacts.filter(
        contact =>
          contact.id !== contactId,
      ),
    );
  }

  function foundContacts() {
    const normalizeFilter =
      filter.toLowerCase();

    if (contacts) {
      return contacts.filter(
        contact => {
          return contact.name
            .toLowerCase()
            .includes(normalizeFilter);
        },
      );
    }
  }

  return (
    <Section>
      <Container>
        <Title title={'Phonebook'} />
        <ContactForm
          onSubmit={handleFormSubmit}
        />
        <Toaster />
        <Title title={`Contacts`} />
        <Filter
          value={filter}
          onChange={handleChangeFilter}
        />
        <ContactsList
          contacts={foundContacts()}
          onDeleteContact={
            deleteContact
          }
        />
      </Container>
    </Section>
  );
}

export default App;
