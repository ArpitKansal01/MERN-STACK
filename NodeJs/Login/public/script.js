const formDOM = document.querySelector(".form")
const usernameInputDOM = document.querySelector(".username-input")
const passwordInputDOM = document.querySelector(".password-input")
const formAlertDOM = document.querySelector(".form-alert")
const resultDOM = document.querySelector(".result")
const btnDOM = document.querySelector("#data")
const tokenDOM = document.querySelector(".token")

formDOM.addEventListener("submit",async(e)=>{
    formAlertDOM.classList.remove("text-success")
    tokenDOM.classList.remove("text-success")

    e.preventDefault()
    const username = usernameInputDOM.value
    const password = passwordInputDOM.value

    console.log(username,password);

    try {
        const response = await axios.post("/api/v1/login",{username,password})
        // console.log(response);
        
        const {data} = response
        console.log(data);
        

        formAlertDOM.style.display = "block"
        formAlertDOM.textContent = data.msg
        formAlertDOM.classList.add("text-success")

        usernameInputDOM.value=""
        passwordInputDOM.value=""

        localStorage.setItem("token",data.token)
        tokenDOM.textContent = "token-present"
        tokenDOM.classList.add("text-success")
        resultDOM.innerHTML=""

    } catch (error) {
        console.log(error.response);
        formAlertDOM.style.display="block"
        formAlertDOM.textContent = error.response.data.msg

        localStorage.removeItem("token")

        resultDOM.innerHTML=""
        tokenDOM.textContent="no token present"
        tokenDOM.classList.remove("text-success")
    }

    setTimeout(()=>{
        formAlertDOM.style.display="none"
    },3000)

})

btnDOM.addEventListener("click",async()=>{
    const token = localStorage.getItem("token")
    
    try {
        const response = await axios.get("api/v1/dashboard",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        resultDOM.innerHTML = `<h6>${response.data.msg}</h6> <p>${response.data.secret}</p>`
    } catch (error) {
        localStorage.removeItem("token")
        resultDOM.innerHTML = `<h6>${error.response.data.msg}</h6>`
    }
})

const checkToken = () => {
    tokenDOM.classList.remove("text-success")
    const token = localStorage.getItem("token")
    if(token){
        tokenDOM.textContent = "token-present"
        tokenDOM.classList.add("text-success")
    }

}

checkToken()