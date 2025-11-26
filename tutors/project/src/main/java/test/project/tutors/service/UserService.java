package test.project.tutors.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.project.tutors.repository.UserRepository;
import test.project.tutors.entity.User;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;

  public User login(User user) throws Exception {
      String login = user.getLogin();
      String password = user.getPassword();
      User foundUser = userRepository.findByLogin(user.getLogin());
      if(foundUser == null ) {
          throw new Exception("Пользователь не найден");
      }
      if(!(user.getPassword().equals(password) && user.getLogin().equals(login))){
          throw new Exception("Пользователь не найден");
      }
      return foundUser;
  }
    public User register(User user) throws Exception {
        if(userRepository.findByLogin(user.getLogin()) != null ) {
            throw new Exception("Пользователь уже существует");
        }
        return userRepository.save(user);
    }
}
