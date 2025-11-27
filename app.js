// inputs
const imageInput = document.getElementById("image-input")
const nameInput = document.getElementById("name-input")
const emailInput = document.getElementById("email-input")
const usernameInput = document.getElementById("github-username-input")

//other stuff
const generateBtn = document.getElementById("generate-btn")
const inputImgPreview = document.getElementById("preview-img")
const imageUploadSection = document.querySelector(".create-section")

//input array
const inputs = [imageInput, nameInput, emailInput, usernameInput];
console.log(inputs)

// outputs
const dateTime = document.getElementById("date-time")
const ticketProfileImg = document.getElementById("profile-img-output")
const nameEl = document.getElementById("username-el")
const githubUsernameEl = document.getElementById("github-username-el")
const ticketIdEl = document.getElementById("ticket-id")

// views/screens
const createTicketView = document.querySelector(".create-ticket-section")
const ticketView = document.querySelector(".ticket-section")

let results = []


//image preview chnager
imageInput.addEventListener("change", function() {
    if(imageInput.files[0]) {
        inputImgPreview.src = URL.createObjectURL(imageInput.files[0]);
    }
})


generateBtn.addEventListener("click", function() {
    results = []
    let isAllFilled = true


    // input grabber thingy
    for (let input of inputs){
        if (input.value === ""){
            results.push({
                isEmpty: true,
                id:input.id
            })
        }
        else {
            results.push({
                isEmpty: false,
                id:input.id
            })
        }
    }

    // check if all are filled -_-
    for(i = 0; i < results.length; i++){

        if (results[i].isEmpty){
            isAllFilled = false
        }

    }
    if (isAllFilled === true){
        generateTicket()
        }

    else{
        // identify which ones input boxes are empty and inidcate them :p
        for(i = 0; i < results.length; i++) {
            const currentEl = document.getElementById(results[i].id)
            
            if(results[i].isEmpty){
                currentEl.style.borderColor = "var(--red)"
            }
            else{
                currentEl.style.borderColor = "var(--green)"
            }


            // image input checker
            if( results[i].id === "image-input"){
                if(!imageInput.files[0]){
                    imageUploadSection.style.borderColor = "var(--red)"
                }
                else{
                    imageUploadSection.style.borderColor = "var(--green)"
                }
            }
        }
    }    
})

// ticket generator
function generateTicket() {
    ticketView.style.display = "flex"
    createTicketView.style.display = "none"

    // value setting
    ticketProfileImg.src = URL.createObjectURL(imageInput.files[0])
    nameEl.textContent = nameInput.value
    githubUsernameEl.textContent = "@" + usernameInput.value
    ticketIdEl.textContent = "#" + generateId()
}


// id generator
function generateId() {
    let idNum = ""
    let idLen = 7

    for(i = 0; i < idLen; i++){
        idNum += Math.floor(Math.random()*10)
    }
    return idNum
}

