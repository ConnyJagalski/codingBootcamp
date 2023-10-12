export function analyzePassword(password) {
  const result = {
    length: password.length,
    hasNumbers: /\d/.test(password),
    hasCharacters: /[a-zA-Z]/.test(inputString),
  };
  return result;
}
