DROP DATABASE IF EXISTS services_app;
CREATE DATABASE services_app;
USE services_app;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_adress VARCHAR(255) DEFAULT 'Unknown',
    user_password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    profile_image VARCHAR(255),
    phone_number VARCHAR(20) NOT NULL,
    credit_card_number VARCHAR(20) NOT NULL
);

CREATE TABLE services (
    service_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    service_name VARCHAR(100) NOT NULL,
    service_description VARCHAR(255),
    service_category VARCHAR(255) NOT NULL,
    service_price DECIMAL(10,2) NOT NULL,
    service_images VARCHAR(255),
    service_rating INT CHECK (service_rating BETWEEN 0 AND 5),
    service_creation_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    service_id INT,
    order_date DATE NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    payment_status INT DEFAULT 0,
    quantity INT NOT NULL CHECK (quantity >= 1),
    delivery_status INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);

CREATE TABLE service_images (
    image_id INT PRIMARY KEY AUTO_INCREMENT,
    service_id INT,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);
-- describe users;
-- describe services;
-- describe orders;
-- describe service_images;