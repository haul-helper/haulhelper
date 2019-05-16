import { observable, computed, action, flow } from 'mobx'

import client from 'Services/Client'

interface User {
  id: string,
  username: string,
  email: string,
  role: string,
  hauls?: Array<object>,
}

class UserStore {
  @observable me: User | null = null

  @observable pullingLoginData: boolean = false

  @observable updatingUser: boolean = false

  @action
  login = flow(function * (this: UserStore) {
    try {
      this.pullingLoginData = true
      const { data } = yield client.query({
        query: 'login',
      })
    } catch (err) {
      console.log(err)
    } finally {

    }
  })

  @computed
  isLoggedIn = () => !!this.me
}

export const userStore = new UserStore()
