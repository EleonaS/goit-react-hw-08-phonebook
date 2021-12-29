const getItems = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const getLoading = state => state.contacts.loading;

export { getItems, getFilter, getVisibleContacts, getLoading };
