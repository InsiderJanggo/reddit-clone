-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "downvoted" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "upvoted" INTEGER NOT NULL DEFAULT 0;
