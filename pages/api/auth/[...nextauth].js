import NextAuth from "next-auth";
import Providers from "next-auth/providers" 
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma";

export default NextAuth({
    providers: [
        Providers.Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async session(session, user) {
            session.userId = user.id;
            session.role = user.role;
            return session
        }
    }
})