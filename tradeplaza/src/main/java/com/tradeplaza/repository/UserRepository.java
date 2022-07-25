package com.tradeplaza.repository;

import com.tradeplaza.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<User> findAll() {
        return jdbcTemplate.query(
                "select * from USER",
                new BeanPropertyRowMapper<User>(User.class)
        );
    }

    public User findByPostalCode(String postalCode) {
        final String SQL = "select * from USER where POSTAL_CODE = ?";

        return jdbcTemplate.queryForObject(
                SQL,
                new BeanPropertyRowMapper<User>(User.class),postalCode
        );
    }

    public User getByUsername(String username) {
        final String SQL = "select email, nick_name, password, first_name, last_name, postal_code from USER where  (  email= ? or nick_name= ? )";
        return jdbcTemplate.queryForObject(SQL, new BeanPropertyRowMapper<User>(User.class), username, username);

    }

    public int insertUser(User user){
        final String SQL = "insert into USER (postal_code, email, first_name, last_name, nick_name, password) values(?,?,?,?,?,?)";
        return jdbcTemplate.update(
                SQL,
                user.getPostalCode(), user.getEmail(), user.getFirstName(), user.getLastName(), user.getNickName(), user.getPassword());
    }

    public boolean validatePostalCode(String postalCode) {
        final String POSTAL_CODE = "select count(*)  from LOCATION u where u.POSTAL_CODE = ? ";
        return jdbcTemplate.queryForObject(POSTAL_CODE, new Object[] {postalCode}, Integer.class) > 0;
    }

    public boolean validateNickName(String nickName) {
        final String COUNT_EMAIL = "select count(*)  from USER u where u.NICK_NAME = ? ";
        return jdbcTemplate.queryForObject(COUNT_EMAIL, new Object[] {nickName}, Integer.class) == 0;
    }

    public boolean validateEmail(String email) {
        final String COUNT_EMAIL = "select count(*)  from USER u where u.EMAIL = ? ";
        return jdbcTemplate.queryForObject(COUNT_EMAIL, new Object[] {email}, Integer.class) == 0;
    }
}
