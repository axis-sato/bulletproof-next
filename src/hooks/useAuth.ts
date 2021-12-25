export const USER_ROLE_ADMIN = "ADMIN" as const;
export const USER_ROLE_USER = "USER" as const;
export type UserRole = typeof USER_ROLE_ADMIN | typeof USER_ROLE_USER;
type User = { name: string; role: UserRole };

export const useAuth = () => {
  const user: User = { name: "c8112002", role: USER_ROLE_ADMIN };

  return { user };
};
