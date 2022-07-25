package com.tradeplaza.auth;

import com.tradeplaza.dto.request.LoginRequest;
import com.tradeplaza.dto.response.AuthenticationResponse;
import com.tradeplaza.model.User;
import com.tradeplaza.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;
@Service
public class AuthService{


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTService jwtService;

    @Autowired
    private UserService userService;

    public AuthenticationResponse authenticate(LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new RuntimeException("Incorrect Username and Password", e);
        }
        String jwt = jwtService.generateToken(request.getUsername());
        User user = userService.getUserByUsername(request.getUsername());

        return new AuthenticationResponse(jwt, user);
    }
}
