import React from 'react';
import css from './ContactList.module.css';
import { deleteContact } from 'redax/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'redax/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(contact => (
        <li className={css.contactsItem} key={contact.id}>
          <span>{contact.name}:</span> <span>{contact.number}</span>
          <button
            className={css.contactsBtn}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
