package com.tradeplaza.controller;

import com.tradeplaza.auth.AuthService;
import com.tradeplaza.dto.request.LoginRequest;
import com.tradeplaza.dto.request.RegisterRequest;
import com.tradeplaza.model.User;
import com.tradeplaza.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin
@RequestMapping(value = "/users")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private AuthService authService;

    @GetMapping(value = "")
    public List<User> users(){
        return userService.findAllUsers();
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request){
        final Integer res =  userService.registerUser(request);
        if(res != null || res > 0)
            return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().body("Error occurred during registration");
    }
}
