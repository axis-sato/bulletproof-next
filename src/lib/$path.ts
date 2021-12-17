/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  app: {
    discussions: {
      $url: (url?: { hash?: string }) => ({ pathname: '/app/discussions' as const, hash: url?.hash })
    },
    users: {
      $url: (url?: { hash?: string }) => ({ pathname: '/app/users' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/app' as const, hash: url?.hash })
  },
  auth: {
    login: {
      $url: (url?: { hash?: string }) => ({ pathname: '/auth/login' as const, hash: url?.hash })
    },
    register: {
      $url: (url?: { hash?: string }) => ({ pathname: '/auth/register' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
