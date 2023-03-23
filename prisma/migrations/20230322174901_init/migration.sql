/*
  Warnings:

  - You are about to drop the column `courseDescription` on the `FormInput` table. All the data in the column will be lost.
  - You are about to drop the column `courseName` on the `FormInput` table. All the data in the column will be lost.
  - Added the required column `description` to the `FormInput` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `FormInput` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FormInput" DROP COLUMN "courseDescription",
DROP COLUMN "courseName",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 5;
