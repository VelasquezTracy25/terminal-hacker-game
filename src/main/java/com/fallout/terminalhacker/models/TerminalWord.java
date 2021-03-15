package com.fallout.terminalhacker.models;

import javax.persistence.*;

@Entity
@Table(name="words")
public class TerminalWord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 255)
    private Integer length;

    @Column(columnDefinition = "BOOLEAN")
    private Boolean isCorrect;

    @Column(nullable = false, length = 255)
    private String word;

    @ManyToOne
    @JoinColumn (name = "terminal_id")
    private Terminal terminal;
}