import types from './contacts-types';

const addContact = ({ name }) => ({
  type: types.ADD,
  payload: name,
});

const deleteContact = ({ id }) => ({
  type: types.DELETE,
  payload: id,
});

export default { addContact, deleteContact };
