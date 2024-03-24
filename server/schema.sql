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

-- INSERT INTO users (user_name, 
-- email, user_adress, user_password,
--  full_name, profile_image, phone_number,
--   credit_card_number) VALUES
-- ('john_doe1', 'john1@example.com', '123 Main St, City, Country', 'password123', 'John Doe 1', 'profile_images/john1.jpg', '1234567890', '1234-5678-9012-3456'),
-- ('jane_smith2', 'jane2@example.com', '456 Elm St, City, Country', 'password456', 'Jane Smith 2', 'profile_images/jane2.jpg', '0987654321', '9876-5432-1098-7654'),
-- ('alice_wonderland3', 'alice3@example.com', '789 Oak St, City, Country', 'password789', 'Alice Wonderland 3', NULL, '5678901234', '5678-9012-3456-7890'),
-- ('john_doe4', 'john4@example.com', '123 Main St, City, Country', 'password123', 'John Doe 4', 'profile_images/john4.jpg', '1234567890', '1234-5678-9012-3456'),
-- ('jane_smith5', 'jane5@example.com', '456 Elm St, City, Country', 'password456', 'Jane Smith 5', 'profile_images/jane5.jpg', '0987654321', '9876-5432-1098-7654'),
-- ('alice_wonderland6', 'alice6@example.com', '789 Oak St, City, Country', 'password789', 'Alice Wonderland 6', NULL, '5678901234', '5678-9012-3456-7890'),
-- ('john_doe7', 'john7@example.com', '123 Main St, City, Country', 'password123', 'John Doe 7', 'profile_images/john7.jpg', '1234567890', '1234-5678-9012-3456'),
-- ('jane_smith8', 'jane8@example.com', '456 Elm St, City, Country', 'password456', 'Jane Smith 8', 'profile_images/jane8.jpg', '0987654321', '9876-5432-1098-7654'),
-- ('alice_wonderland9', 'alice9@example.com', '789 Oak St, City, Country', 'password789', 'Alice Wonderland 9', NULL, '5678901234', '5678-9012-3456-7890'),
-- ('john_doe10', 'john10@example.com', '123 Main St, City, Country', 'password123', 'John Doe 10', 'profile_images/john10.jpg', '1234567890', '1234-5678-9012-3456'),
-- ('jane_smith11', 'jane11@example.com', '456 Elm St, City, Country', 'password456', 'Jane Smith 11', 'profile_images/jane11.jpg', '0987654321', '9876-5432-1098-7654'),
-- ('alice_wonderland12', 'alice12@example.com', '789 Oak St, City, Country', 'password789', 'Alice Wonderland 12', NULL, '5678901234', '5678-9012-3456-7890'),
-- ('john_doe13', 'john13@example.com', '123 Main St, City, Country', 'password123', 'John Doe 13', 'profile_images/john13.jpg', '1234567890', '1234-5678-9012-3456'),
-- ('jane_smith14', 'jane14@example.com', '456 Elm St, City, Country', 'password456', 'Jane Smith 14', 'profile_images/jane14.jpg', '0987654321', '9876-5432-1098-7654'),
-- ('alice_wonderland15', 'alice15@example.com', '789 Oak St, City, Country', 'password789', 'Alice Wonderland 15', NULL, '5678901234', '5678-9012-3456-7890'),
-- ('john_doe16', 'john16@example.com', '123 Main St, City, Country', 'password123', 'John Doe 16', 'profile_images/john16.jpg', '1234567890', '1234-5678-9012-3456'),
-- ('jane_smith17', 'jane17@example.com', '456 Elm St, City, Country', 'password456', 'Jane Smith 17', 'profile_images/jane17.jpg', '0987654321', '9876-5432-1098-7654'),
-- ('alice_wonderland18', 'alice18@example.com', '789 Oak St, City, Country', 'password789', 'Alice Wonderland 18', NULL, '5678901234', '5678-9012-3456-7890'),
-- ('john_doe19', 'john19@example.com', '123 Main St, City, Country', 'password123', 'John Doe 19', 'profile_images/john19.jpg', '1234567890', '1234-5678-9012-3456'),
-- ('jane_smith20', 'jane20@example.com', '456 Elm St, City, Country', 'password456', 'Jane Smith 20', 'profile_images/jane20.jpg', '0987654321', '9876-5432-1098-7654'),
-- ('alice_wonderland21', 'alice21@example.com', '789 Oak St, City, Country', 'password789', 'Alice Wonderland 21', NULL, '5678901234', '5678-9012-3456-7890'),


-- INSERT INTO services (user_id, service_name, 
-- service_description, service_category, 
-- service_price, service_images, service_rating,
--  service_creation_date) VALUES
-- (1, 'House Cleaning', 'Professional cleaning service for homes', 'Home', 50.00, 'cleaning.jpg', 4, '2023-01-01'),
-- (2, 'Plumbing Repair', 'Fixing plumbing issues in residential properties', 'Home', 80.00, 'plumbing.jpg', 3, '2023-01-02'),
-- (3, 'Math Tutoring', 'Private math tutoring sessions for students', 'Education', 30.00, 'tutoring.jpg', 5, '2023-01-03'),
-- (4, 'Garden Landscaping', 'Custom garden landscaping services', 'Home', 100.00, 'landscaping.jpg', 4, '2023-01-04'),
-- (5, 'Event Catering', 'Professional catering services for events', 'Events', 150.00, 'catering.jpg', 5, '2023-01-05'),
-- (6, 'Web Development', 'Custom website development services', 'Technology', 200.00, 'webdev.jpg', 4, '2023-01-06'),



-- INSERT INTO orders (user_id, service_id, order_date, total_price, payment_status, quantity, delivery_status) VALUES
-- (1, 1, '2023-01-01', 50.00, 1, 1, 1),
-- (2, 2, '2023-01-02', 80.00, 1, 1, 1),
-- (3, 3, '2023-01-03', 30.00, 1, 1, 1),
-- (1, 4, '2023-01-04', 100.00, 1, 1, 1),
-- (2, 5, '2023-01-05', 150.00, 0, 1, 0),
-- (3, 6, '2023-01-06', 200.00, 1, 1, 1),
-- (1, 1, '2023-01-07', 50.00, 1, 1, 1),
-- (2, 2, '2023-01-08', 80.00, 1, 1, 1),
-- (3, 3, '2023-01-09', 30.00, 1, 1, 1),
-- (1, 4, '2023-01-10', 100.00, 1, 1, 1),
-- (2, 5, '2023-01-11', 150.00, 0, 1, 0),
-- (3, 6, '2023-01-12', 200.00, 1, 1, 1),
-- (1, 1, '2023-01-13', 50.00, 1, 1, 1),
-- (2, 2, '2023-01-14', 80.00, 1, 1, 1),
-- (3, 3, '2023-01-15', 30.00, 1, 1, 1),
-- (1, 4, '2023-01-16', 100.00, 1, 1, 1),
-- (2, 5, '2023-01-17', 150.00, 0, 1, 0),
-- (3, 6, '2023-01-18', 200.00, 1, 1, 1),
-- (1, 1, '2023-01-19', 50.00, 1, 1, 1),
-- (2, 2, '2023-01-20', 80.00, 1, 1, 1);
-- describe users;
-- describe services;
-- describe orders;
-- describe service_images;