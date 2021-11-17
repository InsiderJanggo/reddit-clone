/*
  Warnings:

  - You are about to drop the column `subedditId` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_subedditId_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "subedditId",
ADD COLUMN     "subredditId" TEXT;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_subredditId_fkey" FOREIGN KEY ("subredditId") REFERENCES "Subreddit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
