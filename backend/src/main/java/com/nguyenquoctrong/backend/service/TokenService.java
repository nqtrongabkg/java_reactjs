package com.nguyenquoctrong.backend.service;

import java.util.List;
import com.nguyenquoctrong.backend.entity.Token;

public interface TokenService {
    Token createToken(Token token);

    Token getTokenById(Long tokenId);

    List<Token> getAllTokens();

    Token updateToken(Token token);

    void deleteToken(Long tokenId);
}
