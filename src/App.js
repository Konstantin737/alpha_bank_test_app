import { useState } from 'react';
import React from 'react';
import './App.css';
import PostList from './components/PostList';
import PostService from './API/PostService';
import MyButton from './components/UI/button/MyButton';
import MySelect from './components/UI/select/MySelect';


function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      albumId: 1,
      title: 'Honda CB1300 (CB1300 SUPER FOUR, CB1300SF, изнач. BDSM3) — мотоцикл, флагман компании Honda. Относится к стандартным (классическим) дорожным мотоциклам класса Universal Japanese Motorcycle (UJM). Является продолжателем линейки мотоциклов Honda проекта BigOne.',
      url: 'https://www.msa-direct.co.uk/ProdImages/xl/scorpion-factory-eha81-side2.jpg',
      thumbnailUrl: 'https://carscale.ru/wp-content/catalog_img/HONDA/HONDA_CB1300/0.jpg',
      like: false
    },
    {
      id: 2,
      albumId: 1,
      title: 'В середине 90-х из-за жесткой конкуренции среди мото производителей (Suzuki, Yamaha, Kawasaki) в классе больших дорожных «классиков» компания Honda была вынуждена пересмотреть выпускающуюся с ноября 1992 года «литровую» модель CB1000 Super Four (SC30) проекта BigOne, начавшегося еще в 1969 году с модели Honda Dream CB750 Four.',
      url: 'https://rakebin.com/wp-content/uploads/2021/01/d994a7f5804ea32a2765d54-1-600x600.jpg',
      thumbnailUrl: 'https://i.7fon.org/150/r1098039.jpg',
      like: false
    },
    {
      id: 3,
      albumId: 1,
      title: 'Новая модель CB1300SF была визуально похожа на предшественника и сохранила все признаки стандартного «классического» мотоцикла — трубчатая рама, «открытый» двигатель, металлический бак большого объема, круглая фара, два амортизатора в задней подвеске, четырехцилиндровый рядный двигатель.',
      url: 'https://www.abart-performance.com/images/product_images/original_images/7975_0.jpg',
      thumbnailUrl: 'https://secure-dcdn.cdn.nimg.jp/nicoaccount/usericon/2048/20480251.jpg?1314735111',
      like: false
    }
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([...posts]);


  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
    setFilteredPosts(newFilteredArr.filter(p => p.id !== id))
    // console.log('Удален');
  }

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
    setFilteredPosts(posts);
    // console.log(posts);// тут посты с сервера
  }

  const likeOrDis = (likeOrDis, postID) => {
    newFilteredArr.filter(post=>{if(post.id === postID) {return [post.like = likeOrDis]}});
  }

  // //функция сортировки массива
  let newFilteredArr = [...posts];
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    if(sort === 'like') {
      newFilteredArr = newFilteredArr.filter(post => post.like === true)
      setFilteredPosts(newFilteredArr);
    } else if (sort === 'dislike') {
      newFilteredArr = newFilteredArr.filter(post => post.like === false)
      setFilteredPosts(newFilteredArr);
    } else if (sort === 'id') {
      newFilteredArr = newFilteredArr.filter(post => post.id >= 1)
      setFilteredPosts(newFilteredArr);
    }
  }

  return (
    <div className="App">
      <MySelect
        value = {selectedSort} //изначально пустая строка
        onChange = {sortPosts} //тут будет то что я выбрал в селекторе
        defaultValue='Сортировка'
        options={[
          {value: 'id', name: 'Показать все'},
          {value: 'like', name: 'Показать понравившиеся'},
          {value: 'dislike', name: 'Показать не понравившиеся'}
        ]}
      />
      <PostList posts={filteredPosts} deletePost={deletePost} likeOrDis={likeOrDis}/>
      <MyButton onClick={fetchPosts}>Загрузить данные с сервера</MyButton>
    </div>
  );
}

export default App;
