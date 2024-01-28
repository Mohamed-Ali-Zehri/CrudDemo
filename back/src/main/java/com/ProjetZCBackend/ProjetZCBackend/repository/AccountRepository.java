package com.ProjetZCBackend.ProjetZCBackend.repository;

import com.ProjetZCBackend.ProjetZCBackend.Entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account,Long> {
}
