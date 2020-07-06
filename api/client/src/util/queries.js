import axios from 'axios';

// Queries for get ALL the results of any table with no filter
export const getAllData = async (table) => {
  return await axios
    .get(`http://localhost:4000/${table}`)
    .then((response) => {
      return response.data;
    })
    .catch(err => console.log(err))
}

// Queries for get one row by name
export const getOneCharacter = async (name) => {
  return await axios
    .get(`http://localhost:4000/characters/${name}`)
    .then((response) => {
      return response.data;
    })
    .catch(err => console.log(err))
}

export const getOneBook = async (name) => {
  return await axios
    .get(`http://localhost:4000/books/${name}`)
    .then((response) => {
      return response.data;
    })
    .catch(err => console.log(err))
}

export const getOneSaga = async (name) => {
  return await axios
    .get(`http://localhost:4000/sagas/${name}`)
    .then((response) => {
      return response.data;
    })
    .catch(err => console.log(err))
}

export const getOnePlanet = async (name) => {
  return await axios
    .get(`http://localhost:4000/planets/${name}`)
    .then((response) => {
      return response.data;
    })
    .catch(err => console.log(err))
}

export const getOneMagicSystem = async (name) => {
  return await axios
    .get(`http://localhost:4000/magic-systems/${name}`)
    .then((response) => {
      return response.data;
    })
    .catch(err => console.log(err))
}

// Queries for reviews

export const addOneReview = async (rating, bookName, bookDesc) => {
  return await axios
    .post(`http://localhost:4000/reviews/add`, {
      description: bookDesc,
      book_name: bookName,
      rating: rating
    })
    .then((response) => {
      return response.data;
    })
    .catch(err => console.log(err))
}

export const deleteOneReview = async (id) => {
  return await axios
    .delete(`http://localhost:4000/reviews/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch(err => console.log(err))
}

export const updateOneReview = async (id, bookName, bookDesc, bookRating) => {
  return await axios
    .put(`http://localhost:4000/reviews/${id}`, {
      description: bookDesc,
      book_name: bookName,
      rating: bookRating
    })
    .then((response) => {
      return response.data;
    })
    .catch(err => console.log(err))
}