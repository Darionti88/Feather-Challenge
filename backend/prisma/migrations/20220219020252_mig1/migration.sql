-- CreateTable
CREATE TABLE `Policy` (
    `policyNumber` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `insuranceType` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Policy_policyNumber_key`(`policyNumber`),
    PRIMARY KEY (`policyNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer` (
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `policyId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `customer_policyId_key`(`policyId`),
    INDEX `customer_policyId_idx`(`policyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
