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

export const createSubReddit = async(name, image, parther, description, userId) => {
    if(!parther) parther = false;

    const subreddit = await prisma.subreddit.create({
        data: {
            name,
            image,
            parther,
            description,
            userId
        }
    })
    await prisma.$disconnect()
    return subreddit
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