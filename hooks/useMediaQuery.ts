const useMediaQuery = (query: string) => {
  const returnedQuery = window.matchMedia(`${query}`).matches;
  return returnedQuery;
}
 
export default useMediaQuery;