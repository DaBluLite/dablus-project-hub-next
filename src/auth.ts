import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Discord({
      async profile(profile) {
        return {
          id: profile.id,
          name: profile.global_name,
          email: profile.username,
          image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${profile.avatar.startsWith("a_") ? "gif" : "webp"}`
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string
      return session
    }
  },
})