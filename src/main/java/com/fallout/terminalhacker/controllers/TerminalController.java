package com.fallout.terminalhacker.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TerminalController {
    @GetMapping("/terminal")
    public String getHome(){
        return "terminal";
    }
}
