package com.fallout.terminalhacker.controllers;

import com.fallout.terminalhacker.models.Terminal;
import com.fallout.terminalhacker.models.TerminalWord;
import com.fallout.terminalhacker.repositories.TerminalRepository;
import com.fallout.terminalhacker.repositories.WordRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
public class TerminalController {

    private final TerminalRepository terminalDao;
    private final WordRepository wordDao;


    public TerminalController(TerminalRepository terminalDao, WordRepository wordDao) {
        this.terminalDao = terminalDao;
        this.wordDao = wordDao;
    }

    @GetMapping("/terminal/{id}")
    public String getHome(Model model, @PathVariable long id){
        model.addAttribute("terminal", terminalDao.findById(id));
        //Returns list of terminal words
        model.addAttribute("words", wordDao.findAllByTerminalId(id));
        return "terminal";
    }
}
