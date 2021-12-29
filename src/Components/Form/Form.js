import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { Form, Input, Label, Button } from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts_operations';

import { getItems } from '../../redux/contacts/contacts_selector';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';

function ContactForm() {
  const [name, setName] = useState('');
  //const [number, setNumber] =
  //  useState('');
  const [phone, setPhone] = useState('');

  const items = useSelector(getItems);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setPhone(value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (items.find(contact => contact.name === name)) {
      toast(`${name} is already in contacts`);
    } else {
      dispatch(
        addContact({
          name,
          phone,
          id: nanoid(),
        }),
      );
      reset();
    }
  }

  function reset() {
    setName('');
    setPhone('');
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder="Enter name"
          required
        />
      </Label>
      <Label>
        Phone number
        <Input
          type="tel"
          name="number"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="+111-111-11"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

/*ContactForm.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onSumbit: PropTypes.func.isRequired,
};*/

export { ContactForm };
