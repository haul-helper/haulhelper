import { observable, computed, action } from 'mobx'

interface User {
  id: string,
  username: string,
  email: string,
  role: string,
  hauls?: Array<object>,
}

class UserStore {
  @observable me: User? = null

  @observable pullingLoginData: boolean = false

  @observable updatingUser: boolean = false

}

export const userStore = new UserStore()
