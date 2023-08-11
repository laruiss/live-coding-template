export const apiBaseUrl = 'https://swapi.dev/api'

export const peopleRoute = '/people'
export const filmRoute = '/film'

export const searchParam = '?search='

export const searchPeopleRoute = (query) => apiBaseUrl + peopleRoute + searchParam + query
export const searchFilmRoute = (query) => apiBaseUrl + filmRoute + searchParam + query
