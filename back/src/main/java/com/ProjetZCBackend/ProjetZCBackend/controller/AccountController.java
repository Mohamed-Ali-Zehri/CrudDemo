package com.ProjetZCBackend.ProjetZCBackend.controller;

import com.ProjetZCBackend.ProjetZCBackend.Entities.Account;
import com.ProjetZCBackend.ProjetZCBackend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AccountController {
    @Autowired
    private AccountRepository accountRepository ;
    @GetMapping("/accounts")
    public List<Account> getAllAccounts()
    {
        return accountRepository.findAll() ;
    }
    @GetMapping("/accounts/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable(value = "id") Long accountId)
            throws ResourceNotFoundException {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found for this id :: " + accountId));
        return ResponseEntity.ok().body(account);
    }

    @PostMapping("/accounts")
    public Account createAccount( @RequestBody Account account) {
        return accountRepository.save(account);
    }

    @PutMapping("/accounts/{id}")
    public ResponseEntity<Account> updateAccount(@PathVariable(value = "id") Long accountId,
                                                  @RequestBody Account accountDetails) throws ResourceNotFoundException {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found for this id :: " + accountId));

        account.setCin(accountDetails.getCin());
        account.setAccountNumber(accountDetails.getAccountNumber());
        account.setAgency(accountDetails.getAgency());
        account.setAmount(accountDetails.getAmount());
        account.setLastName(accountDetails.getLastName());
        account.setFirstName(accountDetails.getFirstName());
        Account updatedAccount = accountRepository.save(account);
        return ResponseEntity.ok(updatedAccount);
    }
    @DeleteMapping("/accounts/{id}")
    public Map<String, Boolean> deleteAccount(@PathVariable(value = "id") Long accountId)
            throws ResourceNotFoundException {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found for this id :: " + accountId));

        accountRepository.delete(account);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }



}
