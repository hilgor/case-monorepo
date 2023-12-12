package de.iits.elo.match

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.server.ResponseStatusException

@RestController
class MatchController(
    private val matchService: MatchService,
) {

    @GetMapping("/matches")
    fun getAllMatches(): ResponseEntity<List<Match>> =
        ResponseEntity.ok(matchService.findAll())

    @PostMapping("/matches")
    fun createNewMatch(@RequestBody match: Match?): ResponseEntity<Match> {
        match ?: throw ResponseStatusException(HttpStatus.BAD_REQUEST, "Match required for creation, but no match was found in request body")
        return ResponseEntity.ok(matchService.create(match))
    }
}
