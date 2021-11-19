import { Post } from "@prisma/client";
import prisma from "../prisma";

export const getAllPost = async() => {
    const posts = await prisma.post.findMany({
        include: {
            user: true,
            subreddit: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    await prisma.$disconnect()
    return posts;
}

/**
 * Add One Post
 * @param {String} userId 
 * @param {String} subredditId 
 * @param {String} title 
 * @param {String} content 
 * @returns 
 */
export const addPost = async(userId, subredditId, title, content, embed) => {
    const newPost = await prisma.post.create({
        data: {
            title,
            content,
            subredditId,
            userId,
            embed
        }
    })
    await prisma.$disconnect()
    return newPost
}

export const getOnePost = async(id) => {
    const post = await prisma.post.findUnique({
        where: {
            id
        },
        include: {
            user: true,
            subreddit: true
        }
    })
    await prisma.$disconnect()
    return post;
} 