export const selectUser = state => state.auth.user.name;

export const selectLoading = state => state.auth.isLoading;

export const selectLoggedUser = state => state.auth.isLoggedIn;
