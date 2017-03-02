const API_HOST = 'http://localhost:8080'
const AUTH = btoa('user1:admin')
export default {
  get() {
    const params = {
      method: 'GET',
      headers: {'Authorization': `Basic ${AUTH}`}
    }

    return fetch(API_HOST + '/get?from=0', params).then((response) => {
      if(response.ok){
        return response.json()
      } else {
        console.log(response)
      }
    })
  },

  send: function(args){
    const params = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${AUTH}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(args)
    }

    return fetch(API_HOST+'/add', params).then((response) => {
      if(response.ok)
        return response.json().catch(() => Promise.resolve())
      else
        return Promise.reject(response)
    })
  }
}
