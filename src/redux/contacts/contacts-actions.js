import types from './contacts-types';

const addContact = ({ name }) => ({
  type: types.ADD,
  payload: name,
});

export default { addContact };
