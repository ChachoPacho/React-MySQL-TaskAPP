CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    descripcion TEXT,
    PRIMARY KEY (id)
);

INSERT INTO tasks (title, descripcion) VALUES 
('task 1', 'some description'),
('task 2', 'other description');
