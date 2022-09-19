// display final score on end page
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem("mostRecentScore");

// form validation
formValidation = () => {
    let x = document.forms["form"]["uname","umail"].value;
    if (x == "") {
    alert("please enter your name and email address");
    return false;
  }
    
    if ("uname","umail") {
    alert("Your Score has been sent to your email");
    return true;
  }
}




emailjs.init('U6-TXMy0LULArZsgS');
finalScore.innerText = mostRecentScore;



var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};
document.getElementById("send-email").addEventListener("click", function(){
    templateParams={"user_name": document.getElementById("username").value, "user_email": document.getElementById("email").value, "user_score": mostRecentScore }
    emailjs.send('service_45htacs', 'template_u37brzh12', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    }); 


}
)
