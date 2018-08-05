package com.andrew.springreactapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/")
public class MainController {

    @Autowired
    FinanceRepository financeRepository;

    @GetMapping("/")
    public String index(){
        return "index";
    }

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

    @GetMapping("/add")
    public @ResponseBody String addNewFinance(@RequestParam float transactionAmount, @RequestParam String description){
        Finance finance = new Finance();
        finance.setTransactionAmount(transactionAmount);
        finance.setDescription(description);
        financeRepository.save(finance);
        return "Saved";
    }

    @GetMapping("/all")
    public @ResponseBody Iterable<Finance> getAllFinances(){
        return financeRepository.findAll();
    }

    @GetMapping("/finance")
    public @ResponseBody Optional<Finance> getTransaction(@RequestParam Integer transactionId){
        return financeRepository.findById(transactionId);
    }


}