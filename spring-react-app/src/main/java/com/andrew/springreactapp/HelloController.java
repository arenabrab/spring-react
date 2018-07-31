package com.andrew.springreactapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

    @GetMapping("/DBConnection")
    public String dbConnection() throws SQLException {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        Connection connection = connectionFactory.getConnection();
         return String.valueOf(connection.isClosed());
    }
}