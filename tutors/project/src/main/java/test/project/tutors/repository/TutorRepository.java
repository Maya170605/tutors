package test.project.tutors.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import test.project.tutors.entity.Tutor;

@Repository
public interface TutorRepository extends CrudRepository<Tutor, Long> {
  Tutor findByFullName(String fullName);
  List<Tutor> findAllBySubjectsContaining(String subjects);
}
