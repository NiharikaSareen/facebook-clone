import React, {useState, useEffect} from 'react';  
import './Post.css';
import {Avatar} from '@material-ui/core';
import firebase from '../../firebase.js';
import {db} from '../../firebase.js';


const Post=({postId, origuser, username, userId, caption, imageUrl, noLikes})=>{
	const [comments , setComments] = useState([]);
	const [comment , setComment] = useState('');
	const [show , setShow] = useState('like2');
	const [show2 , setShow2] = useState('textforlike');

	useEffect(() => {
		db.collection("posts")
		.doc(postId)
		.collection("likes")
		.doc(userId)
		.get()
		.then(doc2 =>{
			if (doc2.data()){
				if(show === 'like2'){
					setShow('like2 blue');
					setShow2('textforlike bluetextforlike');
				}else {
					setShow('like2');
					setShow2('textforlike');
				}
			}
		})
	},[postId, userId]);

useEffect(()=>{
	let unsubscribe;
	if(postId){
		unsubscribe =db.collection("posts").doc(postId).collection("comments").orderBy("timestamp", "desc")
		.onSnapshot((snapshot)=>{
			setComments(snapshot.docs.map((doc) => doc.data()))
		});
	}
	return() => {
		unsubscribe();
	}
},[postId])

	const postComment = (e) =>{
		e.preventDefault();
		db.collection('posts').doc(postId).collection('comments').add({
			text: comment,
			username: origuser,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
	}
	const likeHandle = (e) =>{
		e.preventDefault();
		if(show === 'like2'){
		setShow('like2 blue');
		setShow2('textforlike bluetextforlike')
	}else{
		setShow('like2');
		setShow2('textforlike')
	}
		db.collection('posts').doc(postId).get().then(doc =>{
			const data = doc.data();
			if(show === 'like2'){
				db.collection("posts").doc(postId).collection("likes").doc(userId).get().then(doc2=>{
					if(doc2.data()){
						console.log(doc2.dat())
					}else{
						db.collection("posts").doc(postId).collection("likes").doc(userId).set({
							likes:1
						});
						db.collection('posts').doc(postId).update({
							noLikes: data.noLikes + 1
						});
					}
				})
			}else{
				db.collection('posts').doc(postId).collection('likes').doc(userId).delete().then(function(){
					db.collection('posts').doc(postId).update({
						noLikes: data.noLikes - 1 
					});
				})
			}
		})
	}

 return(
 	<div className="post">
 		<div className ="post__header">
 			<Avatar className="post__avatar" alt="" />
 			<h3> {username}</h3>
 		</div>
 		<h4 className="post__text">{caption}</h4>
 		<img src={imageUrl} alt="" className="post__image"/>
 		<div className="post__like">
 			<i className="post__like" />
 			<p> {noLikes} Likes </p>
 		</div>

 		<hr />

 		<div className="post__likeoption">
 			<div className="like" onClick={likeHandle}>
 				<i className={show} />
 				<h3 className={show2}> Like </h3>
 			</div>
 			<div className="comment">
 				<i className="comment2" />
 				<h3 className="comment3"> Comment </h3>
 			</div>
 			<div className="share">
 				<i className="share2" />
 				<h3> share </h3>
 			</div>
 		</div>
 		<form onSubmit = {postComment}>
 			<div className="commentBox">
 			<Avatar className="post__avatar2" alt="" />
 			<input type="text"
 			className="commentInputBox"
 			placeholder="Write a comment ...."
 			onChange={(e)=> setComment(e.target.value)} />
 			
 			<input type="submit"
 			disabled={!comment}
 			className="transparent__submit"
 			 />
 			</div>
 			<p className="enterToPost"> Press Enter To Post </p> 
 		</form>
 		{
 			comments.map((comment) =>(
 				<div className={`comments__show ${comment.username === origuser && 'myself'}`}>
 					<Avatar className="post__avatar2" alt="" />
 					<div className="container__comments">
 						<p><span>{comment.username} </span>{comment.text}</p>
 					</div>
 				</div>
 			))
 		}
	</div>
 	);
 }

export default Post;