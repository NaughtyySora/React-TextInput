const regexps = {
  noDigits: /\D/g,
  phoneFormat: /(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,4})/,
};

export const phoneMask = (value: string) => {
  const mask = value.replace(regexps.noDigits, "").match(regexps.phoneFormat);
  return !mask?.[2] ? mask?.[1] : "(" + mask[1] + ") " + mask[2] + (mask[3] ? "-" + mask[3] : "");
};