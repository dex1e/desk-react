export const moveCaretAtEnd = (
  e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
) => {
  const tempValue = e.target.value;
  e.target.value = "";
  e.target.value = tempValue;
};
