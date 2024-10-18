import { defineStore } from 'pinia'

export const Position = defineStore({
  id: 'scroll__pos',
  state: () => {
    return { value: 0 }
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

export const Scrolling = defineStore({
  id: 'scroll__is_scrolling',
  state: () => {
    return { value: false }
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

export const Timer = defineStore({
  id: 'scroll__timer',
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
