//import { ref, onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'

export class sl {
    constructor(token, subdomain) {
        this.token = token;
        this.subdomain = subdomain;
    }
    async useFetch(url) {
        const data = ref(null)
        const error = ref(null)
        let auth = "Basic c2plZmZzMjQ6MTIwMzIwMDU="
        let request = await fetch(url, {headers: {'Authorization': `${auth}`}})
        request = await request.json()
        if (request.error) { error.value = request.error }
        else { data.value = request }
        return {data, error}
    }
    async getHomeworkList() {
        return await this.useFetch('https://hmbhs.schoolloop.com/mapi/assignments?studentID=1593846838236')
    }
}