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
}