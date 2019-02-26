
export function objectToArray(obj) {
  return obj ? Object.keys(obj).map(e => obj[e]) : [];
}