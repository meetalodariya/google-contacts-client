export const authSelectors = {
  getToken({ Auth }: any) {
    return Auth.user.token;
  },
  getUserDetails({ Auth }: any) {
    return {
      name: Auth.user.name,
      email: Auth.user.email,
      profile: Auth.user.profile,
    };
  },
};
