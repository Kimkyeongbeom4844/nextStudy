-- CreateTable
CREATE TABLE `tbFamilySite` (
    `site_id` INTEGER NOT NULL,
    `lang_cd` CHAR(3) NOT NULL,
    `sitename` VARCHAR(45) NULL,
    `link` VARCHAR(512) NULL,
    `link_target` ENUM('blank', 'self') NULL DEFAULT 'blank',
    `is_active` ENUM('Y', 'N') NULL DEFAULT 'Y',
    `del_yn` ENUM('Y', 'N') NULL DEFAULT 'N',
    `created_` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_` DATETIME(0) NULL,
    `timestamp` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `FK_tcLang3_idx`(`lang_cd`),
    PRIMARY KEY (`site_id`, `lang_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbFiles` (
    `file_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `file_type_cd` CHAR(3) NULL,
    `file_ori_name` VARCHAR(512) NULL,
    `file_upd_name` VARCHAR(512) NULL,
    `file_upd_path` VARCHAR(512) NULL,
    `file_upd_size` INTEGER NOT NULL DEFAULT 0,
    `file_ext` VARCHAR(45) NULL,
    `file_rmk` VARCHAR(1024) NULL,
    `del_yn` ENUM('Y', 'N') NOT NULL DEFAULT 'N',
    `created_` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_` DATETIME(0) NULL,
    `timestamp` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `FK_tcFiletype_idx`(`file_type_cd`),
    PRIMARY KEY (`file_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbHistory` (
    `history_id` INTEGER NOT NULL,
    `lang_cd` CHAR(3) NOT NULL,
    `file_id` BIGINT UNSIGNED NULL,
    `seq` INTEGER NULL,
    `history_ymd` DATETIME(0) NULL,
    `content` VARCHAR(512) NULL,
    `link` VARCHAR(512) NULL,
    `link_target` ENUM('blank', 'self') NULL DEFAULT 'blank',
    `is_active` ENUM('Y', 'N') NULL DEFAULT 'Y',
    `del_yn` ENUM('Y', 'N') NULL DEFAULT 'N',
    `created_` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_` DATETIME(0) NULL,
    `timestamp` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `FK_tbFiles_idx`(`file_id`),
    INDEX `FK_tcLang_idx`(`lang_cd`),
    PRIMARY KEY (`history_id`, `lang_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbInquiry` (
    `inquiry_id` INTEGER NOT NULL,
    `lang_cd` CHAR(3) NOT NULL,
    `inquiry_type_id` INTEGER NULL,
    `name` VARCHAR(45) NULL,
    `company_name` VARCHAR(45) NULL,
    `tel` VARCHAR(45) NULL,
    `email` VARCHAR(45) NULL,
    `content` VARCHAR(45) NULL,
    `status` ENUM('W', 'A') NULL DEFAULT 'W',
    `created_` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_` DATETIME(0) NULL,
    `del_yn` ENUM('Y', 'N') NULL DEFAULT 'N',
    `timestamp` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `FK_tcInquiryType0_idx`(`inquiry_type_id`, `lang_cd`),
    INDEX `FK_tcLang5_idx`(`lang_cd`),
    PRIMARY KEY (`inquiry_id`, `lang_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbInquiryAnswer` (
    `inquiry_id` INTEGER NOT NULL,
    `lang_cd` CHAR(3) NOT NULL,
    `content` TEXT NULL,
    `created_` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_` DATETIME(0) NULL,
    `del_yn` ENUM('Y', 'N') NULL DEFAULT 'N',
    `timestamp` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`inquiry_id`, `lang_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbIntPrp` (
    `intprp_id` INTEGER NOT NULL,
    `lang_cd` CHAR(3) NOT NULL,
    `file_id` BIGINT UNSIGNED NOT NULL,
    `launch_ymd` DATETIME(0) NULL,
    `title` VARCHAR(100) NULL,
    `launch_status` ENUM('L', 'S') NOT NULL,
    `synopsys` TEXT NULL,
    `origin_link` VARCHAR(512) NULL,
    `origin_link_target` ENUM('blank', 'self') NULL,
    `author_name` VARCHAR(45) NULL,
    `keyword` VARCHAR(1024) NULL,
    `is_active` ENUM('Y', 'N') NULL DEFAULT 'Y',
    `del_yn` ENUM('Y', 'N') NULL DEFAULT 'N',
    `created_` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_` DATETIME(0) NULL,
    `timestamp` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `FK_tbFiles_idx`(`file_id`),
    INDEX `FK_tcLang_idx`(`lang_cd`),
    PRIMARY KEY (`intprp_id`, `lang_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbIntPrpLinks` (
    `intprp_id` INTEGER NOT NULL,
    `lang_cd` CHAR(3) NOT NULL,
    `seq` INTEGER NOT NULL,
    `platform_name` VARCHAR(45) NULL,
    `platform_link` VARCHAR(1024) NULL,
    `platform_target` ENUM('blank', 'self') NULL,
    `created_` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_` DATETIME(0) NULL,
    `timestamp` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`intprp_id`, `lang_cd`, `seq`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbMemberAdmin` (
    `admin_id` INTEGER NOT NULL AUTO_INCREMENT,
    `userid` VARCHAR(256) NULL,
    `password` VARCHAR(512) NULL,
    `name` VARCHAR(64) NULL,
    `is_active` ENUM('Y', 'N') NULL DEFAULT 'Y',
    `del_yn` ENUM('Y', 'N') NULL DEFAULT 'N',
    `created_` VARCHAR(45) NULL,

    PRIMARY KEY (`admin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbMemberAdminLog` (
    `log_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `admin_id` INTEGER NULL,
    `login_ip` VARCHAR(45) NULL,
    `login_ua` VARCHAR(45) NULL,
    `created_` VARCHAR(45) NULL,

    INDEX `FK_tbMemberAdmin_idx`(`admin_id`),
    PRIMARY KEY (`log_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbNotice` (
    `notice_id` INTEGER NOT NULL,
    `lang_cd` CHAR(3) NOT NULL,
    `notice_ymd` DATETIME(0) NULL,
    `top_fixed` ENUM('Y', 'N') NULL,
    `title` VARCHAR(256) NULL,
    `content` TEXT NULL,
    `del_yn` ENUM('Y', 'N') NULL DEFAULT 'N',
    `created_` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_` DATETIME(0) NULL,
    `timestamp` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `FK_tcLang_idx`(`lang_cd`),
    PRIMARY KEY (`notice_id`, `lang_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbNoticeAttach` (
    `notice_id` INTEGER NOT NULL AUTO_INCREMENT,
    `lang_cd` CHAR(3) NOT NULL,
    `seq` INTEGER NOT NULL,
    `file_id` BIGINT UNSIGNED NOT NULL,

    INDEX `FK_tbFiles2_idx`(`file_id`),
    PRIMARY KEY (`notice_id`, `lang_cd`, `seq`, `file_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tcFileType` (
    `file_type_cd` CHAR(3) NOT NULL,
    `file_type_name` VARCHAR(45) NULL,
    `del_yn` ENUM('Y', 'N') NOT NULL DEFAULT 'N',

    PRIMARY KEY (`file_type_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tcInquiryType` (
    `inquiry_type_id` INTEGER NOT NULL,
    `lang_cd` CHAR(3) NOT NULL,
    `inquiry_type_name` VARCHAR(32) NULL,
    `is_active` ENUM('Y', 'N') NULL DEFAULT 'Y',
    `del_yn` ENUM('Y', 'N') NULL DEFAULT 'N',

    INDEX `FK_tcLang3_idx`(`lang_cd`),
    PRIMARY KEY (`inquiry_type_id`, `lang_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tcLang` (
    `lang_cd` CHAR(3) NOT NULL,
    `lang_name` VARCHAR(45) NULL,
    `is_active` ENUM('Y', 'N') NULL DEFAULT 'Y',
    `del_yn` ENUM('Y', 'N') NULL DEFAULT 'N',

    PRIMARY KEY (`lang_cd`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbFamilySite` ADD CONSTRAINT `FK_tcLang4` FOREIGN KEY (`lang_cd`) REFERENCES `tcLang`(`lang_cd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbFiles` ADD CONSTRAINT `FK_tcFiletype` FOREIGN KEY (`file_type_cd`) REFERENCES `tcFileType`(`file_type_cd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbHistory` ADD CONSTRAINT `FK_tbFiles` FOREIGN KEY (`file_id`) REFERENCES `tbFiles`(`file_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbHistory` ADD CONSTRAINT `FK_tcLang` FOREIGN KEY (`lang_cd`) REFERENCES `tcLang`(`lang_cd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbInquiry` ADD CONSTRAINT `FK_tcInquiryType0` FOREIGN KEY (`inquiry_type_id`, `lang_cd`) REFERENCES `tcInquiryType`(`inquiry_type_id`, `lang_cd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbInquiry` ADD CONSTRAINT `FK_tcLang5` FOREIGN KEY (`lang_cd`) REFERENCES `tcLang`(`lang_cd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbIntPrp` ADD CONSTRAINT `FK_tbFiles0` FOREIGN KEY (`file_id`) REFERENCES `tbFiles`(`file_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbIntPrp` ADD CONSTRAINT `FK_tcLang0` FOREIGN KEY (`lang_cd`) REFERENCES `tcLang`(`lang_cd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbMemberAdminLog` ADD CONSTRAINT `FK_tbMemberAdmin` FOREIGN KEY (`admin_id`) REFERENCES `tbMemberAdmin`(`admin_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbNotice` ADD CONSTRAINT `FK_tcLang2` FOREIGN KEY (`lang_cd`) REFERENCES `tcLang`(`lang_cd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbNoticeAttach` ADD CONSTRAINT `FK_tbFiles2` FOREIGN KEY (`file_id`) REFERENCES `tbFiles`(`file_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbNoticeAttach` ADD CONSTRAINT `FK_tbNotice2` FOREIGN KEY (`notice_id`, `lang_cd`) REFERENCES `tbNotice`(`notice_id`, `lang_cd`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tcInquiryType` ADD CONSTRAINT `FK_tcLang3` FOREIGN KEY (`lang_cd`) REFERENCES `tcLang`(`lang_cd`) ON DELETE NO ACTION ON UPDATE NO ACTION;
