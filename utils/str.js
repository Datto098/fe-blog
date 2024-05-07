export const strHandle = (str) => {
  const t = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const e = t.replace(/\s+/g, "-");
  const m = e.replace(/\.+/g, '').replace(/\?+/g, '').replace(/!+/g, '');
  const n = m.replace(/(\w)[.,?!]+(?=\s|$)/g, '$1');
  const result = n.replace(/[.?]+$/, '');
  return result.toLowerCase();
}