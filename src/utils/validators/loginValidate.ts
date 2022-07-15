export function loginValidate(str: string) {
  let error = "";

  if (str.length <= 1) {
    error = "Please enter correct Username";
  } else {
    error = "";
  }

  return error;
}
