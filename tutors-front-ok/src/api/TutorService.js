import { $host } from './service';

export class TutorService {
  static async getAllTutors(query = '') {
    const response = await $host.get(`/tutors?query=${query}`);
    return response.data;
  }
  static async getTutor(id) {
    const response = await $host.get('/tutors/' + id);
    return response.data;
  }
  static async removeTutor(id) {
    const response = await $host.delete('/tutors/' + id);
    return response.data;
  }

  static async addTutor(tutor) {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    let formattedDate = `${day}.${month}.${year}`;
    const response = await $host.post('/tutors', {
      fullName: tutor.fullName,
      imgUrl: tutor.imgUrl,
      subjects: tutor.subjects,
      experience: tutor.experience,
      education: tutor.education,
      added: formattedDate,
    });
    return response.data;
  }
  static async updateTutor(id, newTutor) {
    const response = await $host.put(`/tutors/${id}`, {
      fullName: newTutor.fullName,
      imgUrl: newTutor.imgUrl,
      subjects: newTutor.subjects,
      experience: newTutor.experience,
      education: newTutor.education,
      added: newTutor.added,
    });
    return response.data;
  }
}
