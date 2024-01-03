import { Form, Label, Input, Button } from './ContactForm.styled';
import React from 'react';
import { selectContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operactions';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = e => {
    e.preventDefault();
    const newObj = {
      id: nanoid(),
      name: e.target.elements.name.value,
      phone: e.target.elements.number.value,
    };
    let isContact;
    contacts.forEach(contact => {
      if (e.target.name.value.toLowerCase() === contact.name.toLowerCase()) {
        isContact = true;
      }
    });
    isContact
      ? Notiflix.Notify.warning(
          `${e.target.name.value} is already in your Contacts.`,
          {
            timeout: 2000,
            position: 'left-top',
          }
        )
      : dispatch(addContact(newObj));

    e.target.reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <Input
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        <Input
          placeholder="Phone number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
