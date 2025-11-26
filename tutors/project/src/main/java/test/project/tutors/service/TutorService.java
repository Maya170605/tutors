package test.project.tutors.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import test.project.tutors.entity.Tutor;
import test.project.tutors.repository.TutorRepository;

@Service
public class TutorService {
  @Autowired
  private TutorRepository tutorRepository;

  public List<Tutor> getAll(String query) {
    List<Tutor> tutors = new ArrayList<>();
    if (query != null) {
        tutorRepository.findAllBySubjectsContaining(query).forEach(tutors::add);
    }else{

      tutorRepository.findAll().forEach(tutors::add);
    }
    return tutors;
}

  public Tutor getOne(Long id) throws Exception {
    Tutor tutor = tutorRepository.findById(id).orElse(null);
    
    if(tutor == null) {
      throw new Exception("Репетитор не найден");
    } 
    return tutor;
  }

  public Tutor create(Tutor tutor) throws Exception {
    if(tutorRepository.findByFullName(tutor.getFullName()) != null) {
      throw new Exception("Репетитор уже добавлен");
    }
    return tutorRepository.save(tutor);
  }


  public Tutor update(Long id, Tutor newTutor) throws Exception {
    Tutor tutor = tutorRepository.findById(id).orElse(null);
    tutor.setEducation(newTutor.getEducation());
    tutor.setExperience(newTutor.getExperience());
    tutor.setFullName(newTutor.getFullName());
    tutor.setImgUrl(newTutor.getImgUrl());
    tutor.setSubjects(newTutor.getSubjects());
    tutor.setAdded(newTutor.getAdded());
   
    return tutorRepository.save(tutor);
  }

  public Long delete(Long id) throws Exception {
    Tutor tutor = tutorRepository.findById(id).orElse(null);
    if(tutor == null) {
      throw new Exception("Репетитор не найден");
    } 
    tutorRepository.deleteById(id);
    return id;
  }
}
