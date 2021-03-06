package com.msj.devbiblico.domain.repository;

import com.msj.devbiblico.domain.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
    List<User> findByUsernameContainsIgnoreCase(String username);

    @Query(value = "SELECT u FROM User u WHERE u.email = :email ")
    Optional<User> findUserByEmail(String email);
}
