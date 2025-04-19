package com.dashplaygrounds.boardwall.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dashplaygrounds.boardwall.models.Board;
import com.dashplaygrounds.boardwall.repositories.BoardRepository;

@Service
public class BoardService {
    @Autowired
    private BoardRepository boardRepository;

    public List<Board> getAllBoards() {
        return boardRepository.findAll();
    }

    public Board getOneBoardById(Long id) {
        return boardRepository.findById(id).orElseThrow(() -> new RuntimeException("Board not found"));
    }

    public Board saveBoard(Board userAccount) {
        return boardRepository.save(userAccount);
    }

    public Board updateOneBoardById(Long id, Board updatedUser) {
        return boardRepository.findById(id).map(user -> {
            user.setName(updatedUser.getName());
            user.setDescription(updatedUser.getDescription());
            return boardRepository.save(updatedUser);
        }).orElseThrow(() -> new RuntimeException("Board not found"));
    }

    public void deleteById(Long id) {
        boardRepository.deleteById(id);
    }
}
