
const url = "http://localhost:5500/api"

function getUsers(){
axios.get(url)
.then(response =>{
    apiResult.textContent = JSON.stringify(response.data)
    })
.catch(error => console.error(error))
};

function addNewUser(newUser){
    axios.post(url,newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
};

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
};

function updateUser(id, userUpdate)
{
    axios.put(`${url}/${id}`, userUpdate)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
const userUpdate = {
    name: "andrew garfield",
    avatar: "https://tm.ibxk.com.br/2022/04/07/07155452791307.jpg",
    city: "nova york"
}

updateUser(3, userUpdate)

//getUsers()

//getUser(2)

//addNewUser()

const newUser = { name: "Peter Parker",
avatar: "https://tm.ibxk.com.br/2022/04/07/07155452791307.jpg",
city:"Nova York"}
    

