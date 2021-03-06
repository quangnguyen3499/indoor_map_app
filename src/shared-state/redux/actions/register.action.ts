export const DO_REGISTER = 'DO_REGISTER';
export const DO_REGISTER_SUCCESS = 'DO_REGISTER_SUCCESS';
export const DO_REGISTER_FAIL = ' DO_REGISTER_FAIL';

export const doRegister = (
  email: string,
  password: string,
  username: string,
) => ({
  type: DO_REGISTER,
  email,
  password,
  username,
});
