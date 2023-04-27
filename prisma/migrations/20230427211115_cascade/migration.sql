-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_serverId_fkey";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE CASCADE ON UPDATE CASCADE;
