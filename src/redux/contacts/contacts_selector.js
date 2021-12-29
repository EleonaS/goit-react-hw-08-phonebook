const getItems = state =>
  state.contacts.items;
const getFilter = state =>
  state.contacts.filter;

const getVisibleContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter =
    filter.toLowerCase();

  return items.filter(
    ({ name }) =>
      name
        .toLowerCase()
        .includes(normalizedFilter),
    /*||number.includes()
      const includedNumber =
      contacts.find(
        contact =>
          contact.number.replace(
            /[^0-9]/g,
            '',
          ) ===
          number.replace(/[^0-9]/g, ''),
      );
      */
  );
};

export {
  getItems,
  getFilter,
  getVisibleContacts,
};
