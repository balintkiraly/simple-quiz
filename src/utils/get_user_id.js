export const getUserID = (session) => {
  return session && session.user && session.user.id
}
