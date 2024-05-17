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
    user_rating INT CHECK (user_rating BETWEEN 0 AND 5),
    credit_card_number VARCHAR(20) NOT NULL
);

CREATE TABLE services (
    service_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    service_name VARCHAR(100) NOT NULL,
    service_description VARCHAR(255),
    service_category VARCHAR(255) NOT NULL,
    service_price DECIMAL(10,2) NOT NULL,
    service_image VARCHAR(255),
    service_rating INT CHECK (service_rating BETWEEN 0 AND 5),
    service_creation_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    service_id INT,
    order_date DATE NOT NULL,
    order_time TIME DEFAULT '00:00:00',
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
    user_id INT,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (service_id) REFERENCES services(service_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


describe users;
describe services;
describe orders;
describe service_images;

INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('alice_smith', 'alice.smith@example.com', '456 Maple Ave, Somewhere, USA', '$2a$10$8zAti5/l4E5Ati63J6FksuLhR/Nmy6tJW1JnIJ3.FdfLgZKgH1gju', 'Alice Smith', 'profile_image2.jpg', '555-123-4567', 0,'9876543210987654');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('michael_johnson', 'michael.johnson@example.com', '789 Oak St, Anotherplace, USA', '$2a$10$vaxC0zRUjGBqPC0jX9aL3e80zr.t78DZ7ayfW9afSkJhE5kVeN3bu', 'Michael Johnson', 'profile_image3.jpg', '999-999-9999', 0,'1234567890123456');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('sarah_wilson', 'sarah.wilson@example.com', '101 Elm St, Townsville, USA', '$2a$10$5xHHdwwRhO8g3uSlX2fwH.RKLqOwqZUq7x.GuwGQGhC1CkL1E0tQK', 'Sarah Wilson', 'profile_image4.jpg', '111-222-3333', 0,'9876543210123456');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('ryan_anderson', 'ryan.anderson@example.com', '202 Pine St, Suburbia, USA', '$2a$10$wAbF2iM.ZoqKfeXv0IUb5uHL/iz5l.JN/tGq/3G04gJNjdeTVnJom', 'Ryan Anderson', 'profile_image5.jpg', '333-444-5555', 0,'1234567890987654');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('emily_martin', 'emily.martin@example.com', '303 Cedar St, Countryside, USA', '$2a$10$qdQWv.uG0WDu99d3aJ7bNezY74sUGPm1TPvlN9g/Ni3eygxDG1GK2', 'Emily Martin', 'profile_image6.jpg', '666-777-8888',0, '9876543211234567');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('olivia_garcia', 'olivia.garcia@example.com', '505 Walnut St, Uptown, USA', '$2a$10$PuNsXyE6NdcRqjAxMkIhUO6pAYFe1dDwU1QFkKipD2F9wDS68uwwO', 'Olivia Garcia', 'profile_image8.jpg', '888-999-0000', 0,'9876543212345678');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('james_martinez', 'james.martinez@example.com', '606 Oakwood St, Downtown, USA', '$2a$10$aVLzecQPuEGItv4f6w30wOMLV9vom8CUJBuUUrbiYVWOF1GJxB2Hq', 'James Martinez', 'profile_image9.jpg', '444-555-6666',0,'1234567891209876');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('emma_robinson', 'emma.robinson@example.com', '707 Maplewood St, Metropolis, USA', '$2a$10$IQWetlL1Kbz14LTYc63FQuIuvAtNk6YQ5mOErCQXxAWiYvFVHOZ3a', 'Emma Robinson', 'profile_image10.jpg', '777-888-9999', 0,'9876543213456789');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('noah_clark', 'noah.clark@example.com', '808 Cherry St, Hamletville, USA', '$2a$10$Zw.F1U8TCSX8N19RitpjXO6HYeDRwY18aF8W8KtRL1KCCPjqQAW.2', 'Noah Clark', 'profile_image11.jpg', '555-666-7777', 0,'1234567891309876');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('ava_rodriguez', 'ava.rodriguez@example.com', '909 Pineapple St, Seaside, USA', '$2a$10$8h6KT7pTYUvYvfR5HXiLOu.WcG6x5kLj5Dwwzv0jUmcU.vuVp6Bsu', 'Ava Rodriguez', 'profile_image12.jpg', '999-888-7777', 0,'9876543214567890');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('william_wright', 'william.wright@example.com', '1010 Mango St, Rivertown, USA', '$2a$10$er1j0NB3UqVR.7kF95F3e.YTh8h2MkCPWLgrs8C80h4DtR45RhyDW', 'William Wright', 'profile_image13.jpg', '333-222-1111', 0,'1234567891409876');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('mia_hall', 'mia.hall@example.com', '1111 Peach St, Hillside, USA', '$2a$10$Jo0.qXVjvdfCgYPna6lX4eb7eF8Dz2F1E00b/J8nVqQyK5aUZ2MBu', 'Mia Hall', 'profile_image14.jpg', '111-222-3333', 0,'9876543215678901');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('ethan_gonzalez', 'ethan.gonzalez@example.com', '1212 Blueberry St, Lakeside, USA', '$2a$10$k9aV40OixtKZS0oAjxNwLees5P2B5CJbNUJUdRVb.7DvKkloGJ2W2', 'Ethan Gonzalez', 'profile_image15.jpg', '222-333-4444', 0,'1234567891509876');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Ahmed_Salim', 'ahmed.salim@example.com', 'King Fahd Street, Al Salimiyah District, Dammam, Saudi Arabia', '$2a$10$OWyQfOv0zg50OFV7O3LMjeM0rAIdKFZMyXfqZfMCNMoXGRSXq2Dj6', 'Ahmed Salim', 'profile_image_ar5.jpg', '+966545678901', 0,'1234567898765432');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Fatima_Omar', 'fatima.omar@example.com', 'King Fahd Road, Al Rawdah District, Riyadh, Saudi Arabia', '$2a$10$kW3mUvEBnuNiLp/12mHqMeAgxw5YBn2FJlhdDfB6lpA.XPH5G1wGe', 'Fatima Omar', 'profile_image_ar6.jpg', '+966556789012', 0,'9876543212345678');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Youssef_Hassan', 'youssef.hassan@example.com', 'Abdullah Al Thani Street, Al Malaz District, Riyadh, Saudi Arabia', '$2a$10$KDSYh8l21zVU8s9K.0uAnO.9ZCGgk/ZgDSYexDchQ2k7/2j9NQihG', 'Youssef Hassan', 'profile_image_ar7.jpg', '+966567890123', 0,'1234567897654321');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Layla_Mahmoud', 'layla.mahmoud@example.com', 'Prince Mohammed Bin Fahd Road, An Nahdah District, Al Khobar, Saudi Arabia', '$2a$10$J4DRh7Quc8B27Zh7u4pZfOaivWvHgN3Hc0Yr8Y2nK0uAr9noA4XKa', 'Layla Mahmoud', 'profile_image_ar8.jpg', '+966578901234', 0,'9876543213456789');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Omar_Abdelrahman', 'omar.abdelrahman@example.com', 'King Saud Road, Al Olaya District, Riyadh, Saudi Arabia', '$2a$10$Tj7mUkFwhrX5pHt1v7Rw3.7XM9vVqshhaGmGO92WCPflKX0SLQp1G', 'Omar Abdelrahman', 'profile_image_ar9.jpg', '+966590123456', 0,'1234567890987654');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Nour_Saleh', 'nour.saleh@example.com', 'Al Malik Abdul Aziz Street, Al Aziziyah District, Jeddah, Saudi Arabia', '$2a$10$S2yUGNKgwSxuTHYgIc.mXug/TXn3HxUwUMFoN0.0NnyZsYX1jMV5.', 'Nour Saleh', 'profile_image_ar10.jpg', '+966512345678', 0,'9876543212345678');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Ali_Yousef', 'ali.yousef@example.com', 'King Abdulaziz Road, Al Murabba District, Riyadh, Saudi Arabia', '$2a$10$7R32b2pwh4iVLKP.WDoq/OSFqDPTpTrVy4eJFDg5lKLMlCLf2N78e', 'Ali Yousef', 'profile_image_ar11.jpg', '+966534567890', 0,'1234567898765432');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Amina_Hamza', 'amina.hamza@example.com', 'Al Ulaya Road, Al Ulaya District, Al Khobar, Saudi Arabia', '$2a$10$DTM8vqjV8u6a3VLM.dGo0e9sR2cEk6HYKqX.Np1qNvyINh5uNdZDq', 'Amina Hamza', 'profile_image_ar12.jpg', '+966545678901',0, '9876543212345678');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Mahmoud_Sami', 'mahmoud.sami@example.com', 'King Khalid Street, Al Faisaliyah District, Riyadh, Saudi Arabia', '$2a$10$NehMDmMfDj/etmtCZBb4jO.pXa7v4Xmjte.6K1sqAoBIBAmG7YQVa', 'Mahmoud Sami', 'profile_image_ar13.jpg', '+966556789012', 0,'1234567890987654');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Huda_Abdullah', 'huda.abdullah@example.com', 'Prince Sultan Road, Al Mohammadiyah District, Jeddah, Saudi Arabia', '$2a$10$6/kP49C/QKY.vCvfe./hmucXgzqwxqgGZrC/NiFco71zpd6.nD9oO', 'Huda Abdullah', 'profile_image_ar14.jpg', '+966567890123', 0,'9876543212345678');
INSERT INTO users (user_name, email, user_adress, user_password, full_name, profile_image, phone_number,user_rating, credit_card_number) VALUES ('Mustafa_Nour', 'mustafa.nour@example.com', 'King Abdulaziz Road, Al Hamra District, Riyadh, Saudi Arabia', '$2a$10$xVog2Txot8wmGrEpFB7P5ejF6qdzjODKUcFofV2, fjO8vE6TjQW', 'Mustafa Nour', 'profile_image_ar15.jpg', '+966578901234', 0,'1234567898765432');




INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date) VALUES (1, 'Smart Thermostat Installation', 'Professional installation of a smart thermostat in your home, allowing for remote control and energy savings.', 'Home Automation', 99.99, 'link_to_image_1.jpg', 4, '2024-04-15');
INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date) VALUES  (1, 'Smart Lighting System Setup', 'Installation and configuration of a smart lighting system for your home, enabling automated lighting control and energy efficiency.', 'Home Automation', 149.99, 'link_to_image_2.jpg', 4.5, '2024-04-20');
INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date) VALUES (3, 'Weekly Meal Prep Service', 'Enjoy nutritious and delicious meals all week without the hassle of cooking. Our service provides customized meal plans and prepped ingredients.', 'Meal Preparing', 129.99, 'link_to_image_3.jpg', 5, '2024-04-25');
INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date) VALUES  (3, 'Special Occasion Catering', 'Let us handle the catering for your special events and celebrations. Our chef-curated menus and professional service ensure a memorable dining experience.', 'Meal Preparing', 299.99, 'link_to_image_4.jpg', 4.8, '2024-04-30');
INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date) VALUES (15, 'Evening Babysitting Service', 'Professional and reliable evening babysitting service for parents who need a night out. Our experienced caregivers ensure your children are safe and entertained.', 'Babysitting', 25.00, 'link_to_image_5.jpg', 4.7, '2024-04-18');
INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date) VALUES (15, 'Daytime Babysitting Service', 'Need a trustworthy caregiver during the day? Our daytime babysitting service offers flexible scheduling and attentive care for your little ones.', 'Babysitting', 30.00, 'link_to_image_6.jpg', 4.9, '2024-04-22');
INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date)
VALUES (20, 'Pipe Leak Repair', 'Prompt and professional repair of pipe leaks in your home. Our skilled plumbers use advanced techniques to quickly resolve leaks and prevent water damage.', 'Plumber', 80.00, 'link_to_image_7.jpg', 4.5, '2024-04-10');
INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date)
VALUES (20, 'Drain Cleaning Service', 'Effective clearing of clogged drains in sinks, showers, and toilets. Our drain cleaning service restores proper flow and prevents future blockages.', 'Plumber', 60.00, 'link_to_image_8.jpg', 4.8, '2024-04-15');
INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date)
VALUES (24, 'Smart Home Security System Installation', 'Professional installation of a comprehensive smart home security system, including cameras, sensors, and alarms. Ensure the safety of your home with our advanced security solutions.', 'Home Automation', 299.99, 'link_to_image_9.jpg', 4.9, '2024-04-05');
INSERT INTO services (user_id, service_name, service_description, service_category, service_price, service_image, service_rating, service_creation_date)
VALUES (24, 'Automated Home Entertainment Setup', 'Transform your living space with our automated home entertainment setup. From integrated audio systems to smart TV installations, we`ll create a customized entertainment experience tailored to your preferences.', 'Home Automation', 199.99, 'link_to_image_10.jpg', 4.7, '2024-04-12');


