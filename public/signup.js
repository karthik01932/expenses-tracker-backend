async function signup(event){ 
    try {
        event.preventDefault();

        const name =event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
    
        const signupDetails ={
            name,
            email,
            password
        }
        const response = await axios.post("http://52.90.203.41:3000/user/signup",signupDetails);
        alert("User created successfully");
        console.log(response)
        if(response.status===201){
            window.location.href="./login.html"
        }else{
            throw new Error('Failed to login')
        }
    } catch (err) {
        document.body.innerHTML += `<div style="color: red;">${err}</div>`;
    }
}
