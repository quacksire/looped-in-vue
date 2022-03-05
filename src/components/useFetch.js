// useFetch.js
import { ref } from 'vue'

function cache(key, value) {
  if (value) {
      localStorage.setItem(key, JSON.stringify(value))
  } else {
    return JSON.parse(localStorage.getItem(key))
  }
}


/**
 * @description: useFetch
 * @param {string} url
 * @return: {object} data
 */
export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
    let auth = "Basic c2plZmZzMjQ6MTIwMzIwMDU="

    if (cache(url)) {
      data.value = cache(url)
    } else {
        fetch(url, { headers: { 'Authorization': `${auth}` } })
            .then((res) => res.json())
            .then((json) => (data.value = json))
            .then(() => cache(url, data.value))
            .catch((err) => (error.value = err))
    }
    return { data, error }
}
