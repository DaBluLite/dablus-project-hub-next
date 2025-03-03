import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Discord({
      async profile(profile) {
        return {
          id: profile.id,
          name: profile.username,
          image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.webp`
        };
      },
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
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