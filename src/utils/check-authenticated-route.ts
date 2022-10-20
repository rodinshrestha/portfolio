export const checkAuthenticatedRoute = (route: string) => {
  const protectedRoute = ['/dashboard', '/social-link'];

  return protectedRoute.includes(route);
};
