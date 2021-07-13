import types from './contacts-types';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = ({ id }) => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = event => ({
  type: types.CHANGE_FILTER,
  payload: event,
});

export default { addContact, deleteContact, changeFilter };
