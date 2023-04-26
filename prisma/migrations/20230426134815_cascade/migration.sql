-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_userId_fkey";

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
