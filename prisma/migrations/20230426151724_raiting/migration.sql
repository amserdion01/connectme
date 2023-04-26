/*
  Warnings:

  - A unique constraint covering the columns `[serverId]` on the table `Message` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "rating" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Message_serverId_key" ON "Message"("serverId");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
