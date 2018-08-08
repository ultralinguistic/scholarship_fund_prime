import axios from 'axios';

export function getApplicantRequest(userId) {
  return axios.get(`/api/application/applicant/${userId}`, {
  })
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}
