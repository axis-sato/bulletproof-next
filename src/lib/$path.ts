/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  auth: {
    login: {
      $url: (url?: { hash?: string }) => ({ pathname: '/auth/login' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
