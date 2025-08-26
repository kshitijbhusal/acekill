/*
  Warnings:

  - You are about to drop the column `durationHours` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `language` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Course" DROP COLUMN "durationHours",
DROP COLUMN "language",
DROP COLUMN "level",
DROP COLUMN "tags";
