export const getContacts = ({ contacts: { items } }) => items;
export const getFilter = ({ filter }) => filter;
export const getVisibleContacts = ({ contacts: { items }, filter }) => {
  if (!filter) {
    return items;
  }

  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
