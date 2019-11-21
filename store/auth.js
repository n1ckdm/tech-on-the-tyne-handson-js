import Cookies from 'js-cookie'

// Init empty state
export const state = () => {}

export const mutations = {  
  setUser(state, user) {
    state.user = user
    Cookies.set('user', user)
  },

  logout(state) {
    state.user = null
    Cookies.set('user', null)
  }
}

// get the current username from the state
export const getters = {  
  username: state => {
    return state.user && state.user.username
  }
}