// 请求头-内容类型
export const ContentType = {
  JSON: 'application/json;charset=UTF-8',
  FORM: 'application/x-www-form-urlencoded;charset=UTF-8',
  UPLOAD: 'multipart/form-data',
  STREAM: 'application/octet-stream'
}
// 令牌键值
export const AuthKey = {
  TOKEN: 'token',
  ACCESS: 'access'
}
// 本地存储类型
export const StorageType = {
  COOKIE: 'cookie',
  SESSION: 'sessionStorage',
  LOCAL: 'localStorage'
}
// 请求成功状态码
export const SuccessCode = {
  ZERO: 0,
  TWO_HUNDRED: 200
}
// 请求 mapping
export const RequestMapping = {
  CHATTERBOX: '/chatterbox',
  SLIPPER: '/slipper',
  API: '/api'
}
// websocket mapping
export const WebsocketMapping = {
  WEBSOCKET: '/websocket',
}
// 双向绑定名
export const ModelBinding = {
  MODEL_VALUE: 'update:modelValue',
  MODEL_EVENT: 'update:modelEvent'
}
