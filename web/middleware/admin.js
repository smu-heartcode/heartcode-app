import store from 'store2'

export default async function ({$auth, redirect}) {
  const token = store.get('api.heartcode.app/Bearer')

  if (token) {
    return
  }

  return redirect('/admin/login')
}
