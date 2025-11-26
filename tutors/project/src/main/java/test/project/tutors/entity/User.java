package test.project.tutors.entity;

import jakarta.persistence.*;

@Entity
@Table(name="user")
public class User {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String login;
  private String password;
  private int role;
  public User(){}
  public User(String login, String password) {
    this.login = login;
    this.password =  password;
  }
  public User(String login, String password, int role) {
    this.login = login;
    this.password =  password;
    this.role = role;
  }
  public Long getId() {
    return id;
  }
  public String getLogin() {
    return login;
  }
  public String getPassword() {
    return password;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setLogin(String login) {
    this.login = login;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public int getRole() {
    return role;
  }

  public void setRole(int role) {
    this.role = role;
  }
}
