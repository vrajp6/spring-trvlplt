package com.travelenthusiasts.platform.service;

import com.travelenthusiasts.platform.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class UserService {
    private List<User> users = new ArrayList<>();
    private AtomicLong counter = new AtomicLong();

    public List<User> findAll() {
        return users;
    }

    public Optional<User> findById(Long id) {
        return users.stream().filter(user -> user.getId().equals(id)).findFirst();
    }

    public Optional<User> findByUsername(String username) {
        return users.stream().filter(user -> user.getUsername().equals(username)).findFirst();
    }

    public User save(User user) {
        if (user.getId() == null) {
            user.setId(counter.incrementAndGet());
        }
        users.add(user);
        return user;
    }

    public void deleteById(Long id) {
        users.removeIf(user -> user.getId().equals(id));
    }
}
