import { DefaultSession, DefaultUser } from "next-auth";

// Extend the built-in User type
declare module "next-auth" {
  /**
   * Represents the user object in the database.
   * This is used in the `callbacks`.
   */
  interface User extends DefaultUser {
    id: string;
    role?: string | null;
  }

  /**
   * The shape of the session object returned from `useSession` or `getSession`.
   * This extends the default session to include  custom properties.
   */
  interface Session extends DefaultSession {
    user?: {
      id: string;
      role?: string | null;
    } & DefaultSession["user"];
  }
}
