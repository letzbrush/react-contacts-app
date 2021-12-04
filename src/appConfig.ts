
const baseUrl = 'https://jsonplaceholder.typicode.com'
const apiRoutes = {
  contacts: `${baseUrl}/users`,
  contactDetail: (id: number) => `${baseUrl}/users/${id}`,
}

const navRoutes = {
  contacts: `/`,
  contactDetail: (id: number) => `/contact/${id}`,
}

export const appConfig = {
  apiRoutes,
  navRoutes,
}
