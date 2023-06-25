let forma = document.querySelector("#forma")
let input = document.querySelector("#input")
let loader = document.querySelector('.loader')
let warn = document.querySelector('.warn')
let img=  document.querySelector('#user-img')
let nameUser =document.querySelector('#name')
let githubUser = document.querySelector("#github-username")
let joined = document.querySelector("#joined")
let bio = document.querySelector('#bio')
let repo = document.querySelector('#repo')
let following = document.querySelector("#following")
let follower =document.querySelector("#follower")
let blog = document.querySelector("#blog")
let loc = document.querySelector("#loc")
let twit = document.querySelector("#twit")
let company = document.querySelector("#company")

forma.addEventListener("submit" , e=>{
    e.preventDefault()
    requestApi(`https://api.github.com/users/${forma.input.value}`)
})





async function requestApi(url) {
    try {
        // loader.classList.remove('none')
        const req = await fetch(url)

        if (!req.ok) {

            if (!(req.status == 200)) {
                warn.innerHTML = "No result"
                setTimeout(()=>{
                    warn.innerHTML = ""
                }, 3000)
                loader.classList.add('none')
            }
            throw new Error('Nimadir xato ketdi')
        }
        const data = await req.json()
        loader.classList.add('hidden')
        getData(data)

        console.log(data);

    } catch (err) {
        console.log(err.message)
        // document.body.innerHTML = `<h1> Failed to connect </h1>`
        loader.classList.add('hidden')
    }

}

requestApi("https://api.github.com/users/jakhongiralijonov")

const getData = (data)=>{
    img.src=data.avatar_url
    nameUser.innerHTML = data.name
    githubUser.innerHTML = "@"+data.login
    joined.innerHTML = data.created_at
    
    data.bio ? bio.innerHTML = data.bio : bio.innerHTML = "This account has no bio"
    data.public_repos ? repo.innerHTML = "Repos: " + data.public_repos : repo.innerHTML="Not available"
    data.followers ? follower.innerHTML = "Followers: " + data.followers : follower.innerHTML="Not available"
    data.following ? following.innerHTML = " Following: " + data.following : following.innerHTML="Not available"
    data.location ? loc.innerHTML = data.location : loc.innerHTML="Not available"
    data.twitter_username ? twit.innerHTML = data.twitter_username : twit.innerHTML="  Not available"
    data.company ? company.innerHTML = data.company : company.innerHTML="Not available"
    if(data.blog){
        blog.href = data.blog 
        blog.innerHTML =data.blog 
    }

}

const mode = document.querySelector("#mode")

mode.addEventListener("click" , e=>{
    document.body.classList.toggle('night')
   let img =  document.querySelector("#modeImg")
    if(img.src = "./moon.svg"){
        img.src = "./002-sun.svg"
    }else {
        img.src = "./moon.svg"
    }
} )


