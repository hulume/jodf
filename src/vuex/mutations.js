export const loading = state => {
  return (state.loading = true)
}

export const loaded = state => {
  return (state.loading = false)
}
export const SET_SITE = (state, data) => {
  return (state.site = data)
}
