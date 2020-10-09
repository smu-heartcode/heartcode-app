export default function ({$axios, store}, inject) {
  const api = $axios.create()
  api.setBaseURL(process.env.apiUrl)
  api.onRequest(({headers}) => {
    const token = store.state.admin.password
    headers['Authorization'] = `Bearer ${token}`;
  })

  inject('api', api)
}
