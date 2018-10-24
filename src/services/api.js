// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const UserApi = {
  base: 'api/users/',
  all: function () {
    return fetch(`${this.base}`)
  },
  get: function (id) {
    return fetch(`${this.base}${id}/`)
  }
}

export default UserApi
