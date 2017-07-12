export const set = (state, path, value) => {
  if (!value) {
    return state;
  }

  path = path.split('.');

  const setNestedState = (state, path, value, i) => {
    let newState,
        prop = path[i];

    if (path.length > i) {
      newState = Object.assign({}, state);
      newState[prop] = setNestedState(newState[prop], path, value, i + 1);
      return newState;
    }

    return typeof value === 'function' ? value(state) : value;
  }

  return setNestedState(state, path, value, 0);
};

export const setInArray = (state, path, value) => {
  const id = value.id,
        prop = value.prop,
        val = value.value;

  return set(state, path, state =>
    state.map(item => {
      if (item.id === id) {
        return Object.assign({}, item, {
          [prop]: val
        })
      }

      return Object.assign({}, item);
    })
  );
};

export const push = (state, path, value) => {
  return set(state, path, state =>
    [ ...state, Object.assign({}, value, {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
    }) ]
  );
};

export const deleteInArray = (state, path, id) => {
  return set(state, path, state =>
    state.filter(item =>
      item.id !== id
    )
  );
};
