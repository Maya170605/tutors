package test.project.tutors.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import test.project.tutors.entity.User;
import test.project.tutors.service.UserService;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/auth")
public class UserController {
  
  @Autowired
  private UserService userService;
  
  @PostMapping("/login")
  public ResponseEntity auth(@RequestBody User user) {
    try {
      User foudnUser = userService.login(user);
      return ResponseEntity.ok(foudnUser);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }
  @PostMapping("/register")
  public ResponseEntity register(@RequestBody User user) {
    try {
      User newUser = userService.register(user);
      return ResponseEntity.ok(newUser);
    } catch (Exception e) {
      return ResponseEntity.badRequest().body(e.getMessage());
    }
  }
}
