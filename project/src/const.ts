export enum AppRoute {
  Root = '/',
  Auth = '/login',
  Favorites = '/favorites',
  Room = '/offer/{id}',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
