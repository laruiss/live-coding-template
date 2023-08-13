export const apiBaseUrl = 'https://swapi.dev/api'

export const peopleRoute = '/people'
export const filmRoute = '/film'

export const searchParam = '?search='

export const getSearchPeopleRoute = (query: string) => apiBaseUrl + peopleRoute + searchParam + query
export const getSearchFilmRoute = (query: string) => apiBaseUrl + filmRoute + searchParam + query

// ********************************
// * For advanced developers only *
// ********************************

export const resourceTypes = [
  'people',
  'films',
  'starships',
  'vehicles',
  'species',
  'planets',
] as const

export const routes = new Proxy({}, {
  get (_, prop: typeof resourceTypes[number]) {
    if (!resourceTypes.includes(prop)) {
      throw new Error(`Unknown resource type: ${prop}`)
    }
    return '/' + prop
  },
}) as Record<typeof resourceTypes[number], string>

export const getSearchRoute = (type: typeof resourceTypes[number], query: string) => apiBaseUrl + routes[type] + searchParam + query
