package com.fallout.terminalhacker.repositories;

import com.fallout.terminalhacker.models.Terminal;
import com.fallout.terminalhacker.models.TerminalWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface WordRepository extends JpaRepository<TerminalWord, Long> {
    List<TerminalWord> findAllByTerminalId(long terminal_Id);

}
