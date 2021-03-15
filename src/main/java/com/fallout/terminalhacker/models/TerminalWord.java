package com.fallout.terminalhacker.models;

import com.fallout.terminalhacker.repositories.WordRepository;

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

    public TerminalWord(long id, Integer length, Boolean isCorrect, String word, Terminal terminal) {
        this.id = id;
        this.length = length;
        this.isCorrect = isCorrect;
        this.word = word;
        this.terminal = terminal;
    }

    public TerminalWord() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getLength() {
        return length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public Boolean getCorrect() {
        return isCorrect;
    }

    public void setCorrect(Boolean correct) {
        isCorrect = correct;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public Terminal getTerminal() {
        return terminal;
    }

    public void setTerminal(Terminal terminal) {
        this.terminal = terminal;
    }
}