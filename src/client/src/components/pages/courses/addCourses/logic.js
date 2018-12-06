export const clearAllField = (fields) => {
  const newFields = { ...fields };
  for (const key in newFields) {
    newFields[key] = "";
  }
  return newFields;
} 