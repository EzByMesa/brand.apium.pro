import { defineStore } from 'pinia'
import Cookies from "js-cookie";

export const Language = defineStore({
  id: 'language',
  state: () => {
    if (Cookies.get('lang')) {
      return {
        value: Cookies.get('lang')
      }
    } else {
      Cookies.set('lang', 'ru', { expires: 365 })
      return {
        value: Cookies.get('lang')
      }
    }
  },
  actions: {
    get() {
      return this.value
    },
    set(data) {
      Cookies.set('lang', data, { expires: 365 })
      this.value = Cookies.get('lang')
    }
  },
})

export const Language__Messages = defineStore({
  id: 'language__msg',
  state: () => {
    return { value: null }
  },
  actions: {
    get() {
      return this.value
    },
    set(data) {
      this.value = data
    }
  }
})
