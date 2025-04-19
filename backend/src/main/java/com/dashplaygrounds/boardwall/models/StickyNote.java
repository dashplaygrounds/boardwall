package com.dashplaygrounds.boardwall.models;

import java.time.ZonedDateTime;
import java.util.HashMap;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@Table(name = "sticky_notes")
@Entity
public class StickyNote {
    @Id
    private Long id;
    private String content;
    private String color;
    private HashMap<Float,Float> position;
    private Long boardId;
    private ZonedDateTime createdAt;
    private ZonedDateTime updatedAt;
}
