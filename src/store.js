import { reactive } from 'vue'

export const app = reactive({
  tate: 'home',
    classes: [],
    homework: [],
    back: () => {
        app.state = 'home'
    },
})