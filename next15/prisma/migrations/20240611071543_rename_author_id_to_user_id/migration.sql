/*
  Warnings:

  - You are about to drop the `tbfamilysite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbfiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbhistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbinquiry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbinquiryanswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbintprp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbintprplinks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbmemberadmin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbmemberadminlog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbnotice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbnoticeattach` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tcfiletype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tcinquirytype` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tclang` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tbfamilysite` DROP FOREIGN KEY `FK_tcLang4`;

-- DropForeignKey
ALTER TABLE `tbfiles` DROP FOREIGN KEY `FK_tcFiletype`;

-- DropForeignKey
ALTER TABLE `tbhistory` DROP FOREIGN KEY `FK_tbFiles`;

-- DropForeignKey
ALTER TABLE `tbhistory` DROP FOREIGN KEY `FK_tcLang`;

-- DropForeignKey
ALTER TABLE `tbinquiry` DROP FOREIGN KEY `FK_tcInquiryType0`;

-- DropForeignKey
ALTER TABLE `tbinquiry` DROP FOREIGN KEY `FK_tcLang5`;

-- DropForeignKey
ALTER TABLE `tbintprp` DROP FOREIGN KEY `FK_tbFiles0`;

-- DropForeignKey
ALTER TABLE `tbintprp` DROP FOREIGN KEY `FK_tcLang0`;

-- DropForeignKey
ALTER TABLE `tbmemberadminlog` DROP FOREIGN KEY `FK_tbMemberAdmin`;

-- DropForeignKey
ALTER TABLE `tbnotice` DROP FOREIGN KEY `FK_tcLang2`;

-- DropForeignKey
ALTER TABLE `tbnoticeattach` DROP FOREIGN KEY `FK_tbFiles2`;

-- DropForeignKey
ALTER TABLE `tbnoticeattach` DROP FOREIGN KEY `FK_tbNotice2`;

-- DropForeignKey
ALTER TABLE `tcinquirytype` DROP FOREIGN KEY `FK_tcLang3`;

-- DropTable
DROP TABLE `tbfamilysite`;

-- DropTable
DROP TABLE `tbfiles`;

-- DropTable
DROP TABLE `tbhistory`;

-- DropTable
DROP TABLE `tbinquiry`;

-- DropTable
DROP TABLE `tbinquiryanswer`;

-- DropTable
DROP TABLE `tbintprp`;

-- DropTable
DROP TABLE `tbintprplinks`;

-- DropTable
DROP TABLE `tbmemberadmin`;

-- DropTable
DROP TABLE `tbmemberadminlog`;

-- DropTable
DROP TABLE `tbnotice`;

-- DropTable
DROP TABLE `tbnoticeattach`;

-- DropTable
DROP TABLE `tcfiletype`;

-- DropTable
DROP TABLE `tcinquirytype`;

-- DropTable
DROP TABLE `tclang`;

-- CreateTable
CREATE TABLE `post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bio` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `age` INTEGER NOT NULL DEFAULT 22,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
