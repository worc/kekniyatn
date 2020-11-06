export function accessToken (state = '', message) {
  switch (message.type) {
    case 'RECEIVED_ACCESS_TOKEN':
      return message.token
    default:
      return state
  }
}
