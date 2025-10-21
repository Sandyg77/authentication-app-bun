// This file acts as the backend endpoint that securely communicates with google. (identity provider)

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// This API endpoint handles the authentication logic

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Secures the entire authentication process
};

// Initializes NextAuth with your configuration
const handler = NextAuth(authOptions);

// Exports the handler for both GET and POST methods
export { handler as GET, handler as POST };
