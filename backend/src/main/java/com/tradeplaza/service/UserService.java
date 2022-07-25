package com.tradeplaza.service;

import com.tradeplaza.dto.request.RegisterRequest;
import com.tradeplaza.model.User;
import com.tradeplaza.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public List<User> findAllUsers(){
        return userRepository.findAll();
    }

    public Integer registerUser(RegisterRequest request){
        Assert.notNull(request.getPassword(), "password can't be null");
        boolean isValid = validateRegistration(request.getEmail(), request.getNickName(), request.getPostalCode());
        if(isValid){
            return userRepository.insertUser(request);
        }
        return null;
    }

    private boolean validateRegistration(String email, String nickName, String postalCode) {
        return userRepository.validateEmail(email) && userRepository.validateNickName(nickName) && userRepository.validatePostalCode(postalCode);
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = getUserByUsername(username);
        return new org.springframework.security.core.userdetails.User(username, user.getPassword(), new ArrayList<>());
    }

    public User getUserByUsername(final String username){
        return userRepository.getByUsername(username);
    }
}
