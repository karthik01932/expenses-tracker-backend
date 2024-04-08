async function login(event){ 
    try {
        event.preventDefault();

        const email=event.target.email.value;
        const password=event.target.password.value;
    
        const loginDetails ={
            email,
            password
        }
        const response = await axios.post("http://52.90.203.41:3000/user/login",loginDetails);
        if(response.status===200){
            alert(response.data.message)
            localStorage.setItem('token', response.data.token)
            window.location.href="./expense.html"
        }else{
            throw new Error(response.data.message)
        }
    } catch (err) {
        document.body.innerHTML += `<div style="color: green;">${err}</div>`;
    }
}
function forgotpassword() {
    window.location.href = "./password.html"
}