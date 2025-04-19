package com.dashplaygrounds.boardwall.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dashplaygrounds.boardwall.models.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
