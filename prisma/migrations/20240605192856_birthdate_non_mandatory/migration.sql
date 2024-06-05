/*
  Warnings:

  - You are about to drop the `reviews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_game_id_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "birth" DROP NOT NULL;

-- DropTable
DROP TABLE "reviews";

-- CreateTable
CREATE TABLE "reviews " (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "like" BOOLEAN NOT NULL DEFAULT false,
    "stars" DECIMAL(65,30) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "game_id" TEXT NOT NULL,

    CONSTRAINT "reviews _pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reviews " ADD CONSTRAINT "reviews _user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews " ADD CONSTRAINT "reviews _game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
