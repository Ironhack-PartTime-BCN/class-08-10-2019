export const min = value => {
  return value.length >= 3;
};

export const securePass = value => {
  return value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
};
