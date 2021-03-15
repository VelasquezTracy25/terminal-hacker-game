package com.fallout.terminalhacker.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="terminals")
public class Terminal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "terminal")
    private List<TerminalWord> words;

    public Terminal(long id, List<TerminalWord> words) {
        this.id = id;
        this.words = words;
    }

    public Terminal() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<TerminalWord> getWords() {
        return words;
    }

    public void setWords(List<TerminalWord> words) {
        this.words = words;
    }
}