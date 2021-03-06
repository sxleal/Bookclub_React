// create all actions associated with activeSubreddit
export function  setProfile(profile){

	return{
		type: 'SET_PROFILE',
		isLoggedIn:true,
		profile
	}
}


export function  setLoginMsg(msg){

	return{
		type: 'SET_LOGIN_MSG',
	    msg
	}
}


export function  setSignupMsg(msg){

	return{
		type: 'SET_SIGNUP_MSG',
	    msg
	}
}


export function  setRedirectUrl(url){

	return{
		type: 'SET_REDIRECT_URL',
	    url
	}
}


export function despatchAuthLogin(user){
	console.log(JSON.stringify(user));

	return (despatch) => {

		fetch('/auth/signin', 
		{   
		  method: "POST",
		  body: JSON.stringify(user),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
		.then(data=>data.json())
		.then(data=>{
			console.log("from auth login")
			console.log(data);
			//console.log(data.local.username);

			if(!data.error){

				localStorage.setItem('bcjwt', data.token);
				despatch(setProfile(data.member));
			}else{
				console.log(data.error)
				despatch(setLoginMsg(data.error));
			}
			//despatch(addPost(data));
		});
	}
}


export function despatchAuthSignup(user){
	console.log(JSON.stringify(user));


	return (despatch) => {

		fetch('/auth/signup', 
		{   
		  method: "POST",
		  body: JSON.stringify(user),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
		.then(data=>data.json())
		.then(data=>{
			console.log("from auth signup")
			console.log(data);
			//console.log(data.local.username);
			
			if(!data.error){
				localStorage.setItem('bcjwt', data.token);

				despatch(setProfile(data.member));
			}else{
				console.log(data.error)
				despatch(setSignupMsg(data.error));
			}
		});
	}
}