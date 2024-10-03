import { defineStore } from 'pinia'
import Cookies from "js-cookie";

export const themeStore = defineStore('my_theme', {
  state: () => {
    if (Cookies.get('theme')) {
      return {
        my_theme: Cookies.get('theme')
      }
    } else {
      Cookies.set('theme', 'light', { expires: 365 })
      return {
        my_theme: Cookies.get('theme')
      }
    }
  },
  actions: {
    get() {
      return this.my_theme
    },
    set(data) {
      Cookies.set('theme', data, { expires: 365 })
      this.my_theme = Cookies.get('theme')
    }
  },
})