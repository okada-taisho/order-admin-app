import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import { auth } from "@/lib/admin";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async ({ idToken }: any, _req): Promise<any> => {        if (idToken) {
          try {
            const decoded = await auth.verifyIdToken(idToken);

            return { ...decoded };
          } catch (err) {
            console.error(err);
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...user,
        ...token
      };
    },
    // sessionにJWTトークンからのユーザ情報を格納
    async session({ session, token }) {
      session.user.emailVerified = token.emailVerified;
      session.user.uid = token.uid;
      return session;
    },
  },
};

export default NextAuth(authOptions);
