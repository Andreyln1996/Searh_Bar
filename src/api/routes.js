export const USERS_BY_NAME = (q) => `method/users.search?q=${q}`
export const ACCESS_TOKEN = ()  => `&access_token=cbebfeaff6beba223a8fd89dff8b8fb9a1aff8c0ff7fb50ff3b931bb7052e35c0ea46eb65d3e84411fdc3`
export const USER_BY_ID = (id) => `method/users.get?user_ids=${id}`