import { reactive } from 'vue'

export const app = reactive({
  state: 'home',
    classes: [],
    homework: [],
    back: () => {
        app.state = 'home'
    },
})