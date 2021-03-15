package com.fallout.terminalhacker.controllers;

import com.fallout.terminalhacker.repositories.WordRepository;
import org.springframework.stereotype.Controller;

@Controller
public class WordController {

    private final WordRepository wordDao;


    public WordController(WordRepository wordDao) {
        this.wordDao = wordDao;
    }
}
