package com.tradeplaza.auth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JWTService {
    public static final long EXPIRATION_TIME = 1_800_000; // 30 mins
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String SECRET = "SECRET_KEY_TRADE_PLAZA";

    public String generateToken(final String username ){
        return JWT.create()
                .withSubject(username)
                .withExpiresAt(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(SECRET.getBytes()));
    }
    public boolean isValidToken(final String jwtToken){
        return true;
        //TODO uncomment when we demo
//        if(jwtToken == null)
//            return false;
//        if(getUsername(jwtToken) != null)
//            return true;
//        return false;
    }
    public String getUsername(String token) {
        return JWT.require(Algorithm.HMAC512(SECRET.getBytes()))
                .build()
                .verify(token.replace(TOKEN_PREFIX, ""))
                .getSubject();
    }
}
