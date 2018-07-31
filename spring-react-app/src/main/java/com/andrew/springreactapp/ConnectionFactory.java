package com.andrew.springreactapp;

import java.sql.*;
import com.mysql.cj.jdbc.Driver;

class ConnectionFactory {


    private static final String URL = "jdbc:mysql://localhost:3306/finance?autoReconnect=true&useSSL=false";
    private static final String USER = "root";
    private static final String PASS = "skate1";

    Connection getConnection() {
        try {
            DriverManager.registerDriver(new Driver());
            return DriverManager.getConnection(URL, USER, PASS);
        } catch (SQLException ex) {
            throw new RuntimeException("Error connecting to the database", ex);
        }
    }
}
