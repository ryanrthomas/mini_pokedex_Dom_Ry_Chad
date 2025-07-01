/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Comment";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Hero" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Weapon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hero_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Weapon_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "Hero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WeaponStats" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "weapon_id" INTEGER NOT NULL,
    "weapon_str" INTEGER NOT NULL,
    "weapon_def" INTEGER NOT NULL,
    "weapon_int" INTEGER NOT NULL,
    "weapon_crit" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WeaponStats_weapon_id_fkey" FOREIGN KEY ("weapon_id") REFERENCES "Weapon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Backpack" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "backpack_size" INTEGER NOT NULL,
    "hero_id" INTEGER NOT NULL,
    CONSTRAINT "Backpack_hero_id_fkey" FOREIGN KEY ("hero_id") REFERENCES "Hero" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Backpack_hero_id_key" ON "Backpack"("hero_id");
