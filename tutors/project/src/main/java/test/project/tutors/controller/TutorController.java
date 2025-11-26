package test.project.tutors.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import test.project.tutors.entity.Tutor;
import test.project.tutors.service.TutorService;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/tutors")
public class TutorController {
    @Autowired
    private TutorService tutorService;

    @GetMapping
    public ResponseEntity getAllTutors( @RequestParam(required = false) String query) {
        try {
            return ResponseEntity.ok(tutorService.getAll(query));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity getOneTutor(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(tutorService.getOne(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity updateTutor(@PathVariable Long id, @RequestBody Tutor newTutor) {
        try {
            return ResponseEntity.ok(tutorService.update(id, newTutor));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
    
    @PostMapping
    public ResponseEntity createTutor(@RequestBody Tutor tutor) {
        try {
            return ResponseEntity.ok(tutorService.create(tutor));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteOneTutor(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(tutorService.delete(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}