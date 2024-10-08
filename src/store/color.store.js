import { defineStore } from 'pinia'
import Cookies from "js-cookie";

export const ColorPickerColor = defineStore({
  id: 'cp_courrent',
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
  },
})
