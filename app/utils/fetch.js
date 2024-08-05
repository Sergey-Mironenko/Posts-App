export const fetchData = async (id = '') => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts' + id);
    
  const result = await res.json();
    
  return result;
}
