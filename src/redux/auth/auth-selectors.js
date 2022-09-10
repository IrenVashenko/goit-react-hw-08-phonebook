const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsReffreshing = state => state.auth.isReffreshing;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsReffreshing,
};
export default authSelectors;