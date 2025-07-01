/*
  Warnings:

  - Added the required column `backpack_id` to the `Weapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Weapon` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Weapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hero_id" INTEGER NOT NULL,
    "backpack_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Weapon_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "Hero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Weapon_backpack_id_fkey" FOREIGN KEY ("backpack_id") REFERENCES "Backpack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Weapon" ("createdAt", "hero_id", "id", "name", "rarity", "updatedAt") SELECT "createdAt", "hero_id", "id", "name", "rarity", "updatedAt" FROM "Weapon";
DROP TABLE "Weapon";
ALTER TABLE "new_Weapon" RENAME TO "Weapon";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
