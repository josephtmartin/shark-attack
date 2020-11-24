import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const showsUrl = 'https://www.episodate.com/api/most-popular?page=5';
const baseUrl = apiKeys.firebaseKeys.databaseURL;

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

export default {
  livingStudents,
  dearlyBeloved,
};
