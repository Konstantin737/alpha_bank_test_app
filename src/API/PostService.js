import axios from 'axios';


export default class PostService {
   static async getAll() {
      try {
         const response1 = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
         const response2 = await axios.get('https://jsonplaceholder.typicode.com/albums/4/photos');
         const responseAll = [...response1.data, ...response2.data]
         return responseAll.map(post => {return {...post, like:false}});
      } catch (e) {
         console.log(e);
      }
   }
}