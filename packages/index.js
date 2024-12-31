class isAndrew {
  constructor(config) {
    this.config = config
    if (!config || !config.api_key) {
      throw new Error('api_key is required')
    }
  }

  isUserValid(user, password) {
    if (!user || !password) throw new Error('User is required')

    if (user == 'andrew' && password == '123') return true
    return false
  }
}

module.exports = isAndrew
