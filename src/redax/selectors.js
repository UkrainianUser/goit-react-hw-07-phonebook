export const getContacts = ({ contacts: { value } }) => value;
export const getFilter = ({ filter }) => filter;
export const getVisibleContacts = ({ contacts: { value }, filter }) => {
  if (!filter) {
    return value;
  }

  return value.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
