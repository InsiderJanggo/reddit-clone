import prisma from "../prisma";

export const getAllSubReddit = async() => {
    const subreddits = await prisma.subreddit.findMany({
        orderBy: {
            createdAt
        }
    })
    await prisma.$disconnect()
    return subreddits
}

export const createSubReddit = async() => {
    
}

export const getOneSubReddit = async(id) => {
    const subreddit = await prisma.subreddit.findUnique({
        where: {
            id
        },
        include: {
            posts: true
        }
    })
    await prisma.$disconnect()
    return subreddit
}