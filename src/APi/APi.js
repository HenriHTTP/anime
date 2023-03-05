import axios from 'axios'

const APi = axios.create({
      baseURL:'https://kitsu.io/api/edge'
})
export default APi