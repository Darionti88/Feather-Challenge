/*
  Warnings:

  - The primary key for the `Policy` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `policyNumber` on the `Policy` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `policyId` on the `customer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Policy` DROP PRIMARY KEY,
    MODIFY `policyNumber` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`policyNumber`);

-- AlterTable
ALTER TABLE `customer` MODIFY `policyId` INTEGER NOT NULL;
