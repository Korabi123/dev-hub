const useMediaQuery = (query: string) => {
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia(`${query}`).matches;
    return mediaQuery;
  }
}
 
export default useMediaQuery;