// This file acts as the backend endpoint that securely communicates with google. (identity provider)

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

// This API endpoint handles the authentication logic

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.MONGODB_DATABASE, // Specify your database name here
  }),
  session: {
    strategy: "database", // Store sessions in the database
  },
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
  callbacks: {
    async session({ session, user }) {
      // The user object here is the user from your database
      if (session.user) {
        session.user.id = user.id;
        session.user.role = user.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Secures the entire authentication process
};

// Initializes NextAuth with your configuration
const handler = NextAuth(authOptions);

// Exports the handler for both GET and POST methods
export { handler as GET, handler as POST };
