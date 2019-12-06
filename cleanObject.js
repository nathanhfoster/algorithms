const cleanObject = obj => {
  for (const key in obj) {
    if (!obj[key]) {
      delete obj[key]
    }
  }
  return obj
}

export default cleanObject
