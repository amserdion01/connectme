/*
  Warnings:

  - You are about to drop the `FormInput` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FormInput";

-- CreateTable
CREATE TABLE "Server" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "faculty" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "semester" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 5,
    "importance" TEXT NOT NULL,
    "additionalInfo" TEXT,
    "usefulLinks" TEXT,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);
