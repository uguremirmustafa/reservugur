/*
  Warnings:

  - You are about to drop the column `userId` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropIndex
DROP INDEX "Reservation_userId_placeId_idx";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "userId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Reservation_ownerId_placeId_idx" ON "Reservation"("ownerId", "placeId");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
