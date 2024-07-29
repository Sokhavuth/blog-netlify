/*
  Warnings:

  - You are about to drop the column `categoryItemLimit` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `ditemLimit` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `fitemLimit` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `siteTitle` on the `Setting` table. All the data in the column will be lost.
  - Added the required column `categories` to the `Setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dashboard` to the `Setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frontend` to the `Setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumb` to the `Setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Setting` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Setting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dashboard" INTEGER NOT NULL,
    "frontend" INTEGER NOT NULL,
    "categories" INTEGER NOT NULL,
    "thumb" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
INSERT INTO "new_Setting" ("description", "id") SELECT "description", "id" FROM "Setting";
DROP TABLE "Setting";
ALTER TABLE "new_Setting" RENAME TO "Setting";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
