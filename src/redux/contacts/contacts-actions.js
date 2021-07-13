import { createAction } from '@reduxjs/toolkit';

import shortid from 'shortid';

const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// const deleteContact = ({ id }) => ({
//   type: types.DELETE,
//   payload: id,
// });

// const changeFilter = event => ({
//   type: types.CHANGE_FILTER,
//   payload: event,
// });

export default { addContact, deleteContact, changeFilter };
