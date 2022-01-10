const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

const getFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getFetchingCurrent,
};

export default authSelectors;
