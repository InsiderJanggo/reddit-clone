import prisma from "../prisma";

export const getAllSubReddit = async() => {
    const subreddits = await prisma.subreddit.findMany()
    await prisma.$disconnect()
    return subreddits
}

export const editSubreddit = async(id, name, image, description) => {
    const subreddit = await prisma.subreddit.update({
        where: {
            id
        },
        data: {
            name,
            image,
            description
        }
    })
    await prisma.$disconnect()
    return subreddit
}

export const createSubReddit = async(name, image, parther, description, userId) => {
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
            posts: {
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    subreddit: true,
                    user: true,
                }
            },
            user: true
        }
    })
    await prisma.$disconnect()
    return subreddit
}


