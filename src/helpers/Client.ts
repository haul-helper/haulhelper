import ky from 'ky'

const API_URL = 'https://api.imgur.com/3/album/'

const api = ky.create({
  prefixUrl: API_URL,
  headers: {
    Authorization: `Client-ID ${process.env.CLIENT_ID}`,
  },
})

export default api
