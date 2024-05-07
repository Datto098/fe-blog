export const strHandle = (str) => {
  const t = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const e = t.replace(/[^\w\s]/g, '');
  const result = e.replace(/\s+/g, '-');
  return result.toLowerCase();
}