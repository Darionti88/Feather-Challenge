/*
  Warnings:

  - You are about to alter the column `status` on the `Policy` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("Policy_status")`.
  - You are about to alter the column `insuranceType` on the `Policy` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("Policy_insuranceType")`.

*/
-- AlterTable
ALTER TABLE `Policy` MODIFY `status` ENUM('ACTIVE', 'PENDING', 'CANCELLED', 'DROPPED_OUT') NOT NULL,
    MODIFY `insuranceType` ENUM('LIABILITY', 'HOUSEHOLD', 'HEALTH') NOT NULL;
