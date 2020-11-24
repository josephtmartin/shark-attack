import axios from 'axios';

const baseUrl = 'https://shark-attack-d3955.firebaseio.com/';

const livingStudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json?orderBy="isDead"&equalTo=false`).then((response) => {
    const studentResponse = response.data;
    resolve(Object.values(studentResponse));
  }).catch((error) => reject(error));
});

const dearlyBeloved = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json?orderBy="isDead"&equalTo=true`).then((response) => {
    const studentResponse = response.data;
    resolve(Object.values(studentResponse));
  }).catch((error) => reject(error));
});

export {
  livingStudents,
  dearlyBeloved,
};
