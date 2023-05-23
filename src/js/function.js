const fistename = (name) => {
  const nameuser = name;
  const firsenameuser = nameuser.charAt(0);
  return firsenameuser;
};
const generate_rabndomnum = (length) => {
  const r = Math.floor(Math.random() * (length - 1)) + 0;
  if (r <= 2) return Math.floor(Math.random() * (length - 1)) + 0;
  if (r > 2) return r;
};

export { fistename, generate_rabndomnum };
