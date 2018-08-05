package com.andrew.springreactapp;

import org.springframework.data.repository.CrudRepository;

public interface FinanceRepository extends CrudRepository<Finance, Integer> {
}
