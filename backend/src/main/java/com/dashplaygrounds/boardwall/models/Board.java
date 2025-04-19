package com.dashplaygrounds.boardwall.models;

import java.time.ZonedDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@Table(name = "boards")
@Entity
public class Board {
    @Id
    private Long id;
    private String name;
    private String description;
    private Long categoryId;
    private ZonedDateTime createdAt;
    private ZonedDateTime updatedAt;
}
