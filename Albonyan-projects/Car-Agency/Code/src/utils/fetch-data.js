export const fetchData = async (path) => {
  const response = await fetch(path);
  const data = await response.json()
  return data
}