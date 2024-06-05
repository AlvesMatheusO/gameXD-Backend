-- AlterTable
ALTER TABLE "User" ADD COLUMN     "banner" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "profilePicture" TEXT;
