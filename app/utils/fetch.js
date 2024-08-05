export const fetchData = async (id = '') => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts' + id);

    const parsedResponse = await response.json();
    return parsedResponse;
  } catch {
    return null;
  }
}
