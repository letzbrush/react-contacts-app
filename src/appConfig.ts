
const baseUrl = 'https://jsonplaceholder.typicode.com'
const apiRoutes = {
  contacts: `${baseUrl}/users`,
  contactDetail: (id: number) => `${baseUrl}/users/${id}`,
}

const navRoutes = {
  contacts: `/`,
  contactDetail: (id: number) => `/contact/${id}`,
}

const settings = {
  tooltipDelay: 0.6,
}

export const appConfig = {
  apiRoutes,
  navRoutes,
  settings,
}
