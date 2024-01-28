package com.ProjetZCBackend.ProjetZCBackend.Entities;

import jakarta.persistence.*;

@Entity
@Table(name="accounts")
public class Account {
    private long id ;
    private String firstName ;
    private String lastName;
    private String cin;
    private String accountNumber;
    private String agency ;
    private long amount;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name="first_name",nullable=false)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    @Column(name="last_name",nullable=false)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    @Column(name="cin",nullable=false)

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
    }
    @Column(name="account_number",nullable=false)

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }
    @Column(name="agency",nullable=false)

    public String getAgency() {
        return agency;
    }

    public void setAgency(String agency) {
        this.agency = agency;
    }
    @Column(name="amount",nullable=false)

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public Account(long id, String firstName, String lastName, String cin, String accountNumber, String agency, long amount) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cin = cin;
        this.accountNumber = accountNumber;
        this.agency = agency;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", cin='" + cin + '\'' +
                ", accountNumber='" + accountNumber + '\'' +
                ", agency='" + agency + '\'' +
                ", amount=" + amount +
                '}';
    }

    public Account() {
    }
}
