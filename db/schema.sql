CREATE SCHEMA `burgers` ;

CREATE TABLE `burgers`.`eatdaburgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(255) NOT NULL,
  `devoured` TINYINT(1) NULL,
  `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));