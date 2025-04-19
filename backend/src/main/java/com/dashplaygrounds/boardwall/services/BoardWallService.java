package com.dashplaygrounds.boardwall.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashplaygrounds.boardwall.models.BoardWall;
import com.dashplaygrounds.boardwall.repositories.BoardWallRepository;

@Service
public class BoardWallService {
    @Autowired
    private BoardWallRepository boardWallRepository;

    public List<BoardWall> getAllBoardWalls() {
        return boardWallRepository.findAll();
    }

    public BoardWall getOneBoardWallById(Long id) {
        return boardWallRepository.findById(id).orElseThrow(() -> new RuntimeException("BoardWall not found"));
    }

    public BoardWall saveBoardWall(BoardWall userAccount) {
        return boardWallRepository.save(userAccount);
    }

    public BoardWall updateOneBoardWallById(Long id, BoardWall updatedUser) {
        return boardWallRepository.findById(id).map(user -> {
            user.setName(updatedUser.getName());
            user.setDescription(updatedUser.getDescription());
            return boardWallRepository.save(updatedUser);
        }).orElseThrow(() -> new RuntimeException("BoardWall not found"));
    }

    public void deleteById(Long id) {
        boardWallRepository.deleteById(id);
    }
}
