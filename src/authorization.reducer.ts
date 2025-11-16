export function accessToken (state = '', message: Record<string, string>) {
  switch (message.type) {
    case 'RECEIVED_ACCESS_TOKEN':
      return message.token
    default:
      return state
  }
}
