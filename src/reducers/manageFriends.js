export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const newList = state.friends.filter((friend) => {
        return friend.id !== action.id;
      });
      return {
        ...state,
        friends: newList,
      };
    default:
      return state;
  }
}
