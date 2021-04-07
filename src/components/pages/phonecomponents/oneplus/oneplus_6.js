import React, {useState, useEffect, Component} from 'react';
import Fire from '../../../../firebase';
import Product from '../product';


const Oneplus_6 = () => {
    const db = Fire.firestore();

    useEffect(() => {
        
       db.collection('head_6_oneplus').orderBy("choice").onSnapshot(snapshot => (
         setHead(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('specs_6_oneplus').onSnapshot(snapshot => (
         setSpecs(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('youtube_6_oneplus').onSnapshot(snapshot => (
         setYoutube(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('blog_6_oneplus').onSnapshot(snapshot => (
         setBlog(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('seller_6_oneplus').orderBy("name").onSnapshot(snapshot => (
         setSeller(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('gaming_6_oneplus').onSnapshot(snapshot => (
         setGaming(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('tech_6_oneplus').orderBy("serial").onSnapshot(snapshot => (
         setTech(snapshot.docs.map(doc => doc.data()))
       ))
       }, []);



    const [head,setHead] = useState([]);
    const [specs,setSpecs] = useState([]);
  
    const [youtube,setYoutube] = useState([]);
    const [blog,setBlog] = useState([]);
    const [seller,setSeller] = useState([]);
    
    const [gaming,setGaming] = useState([]);
    const [tech,setTech] = useState([]);

    return (
        <div>
            {head.map((head) => (
           <Product choice={head.choice} device={head.device} url={head.url} specs={specs} youtube={youtube} blog={blog} seller={seller} gaming={gaming} tech={tech}/>
          ))}
        </div>
    )
}

export default Oneplus_6

