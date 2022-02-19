/*
  Warnings:

  - The primary key for the `Policy` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Policy` DROP PRIMARY KEY,
    MODIFY `policyNumber` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`policyNumber`);

-- AlterTable
ALTER TABLE `customer` MODIFY `policyId` VARCHAR(191) NOT NULL;
