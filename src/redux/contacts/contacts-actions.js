import types from './contacts-types';

const addContact = ({ name }) => ({
  type: types.ADD,
  payload: name,
});

const deleteContact = ({ contactId }) => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = event => ({
  type: types.CHANGE_FILTER,
  payload: event,
});

export default { addContact, deleteContact, changeFilter };
