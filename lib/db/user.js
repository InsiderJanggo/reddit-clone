import prisma from "../prisma";

export const getOneUser = async(id) => {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        include: {
            posts: true,
            subreddits: true
        }
    })
    await prisma.$disconnect()
    return user
}

export const getAllUser = async() => {
    const users = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc"
        },
        include: {
            posts: true,
            subreddits: true
        }
    })
    await prisma.$disconnect()
    return users;
}