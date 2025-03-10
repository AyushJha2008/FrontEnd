document.addEventListener("DOMContentLoaded", function(){
    const searchButton = document.getElementById("search-button");
    const userNameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");

    //validating username
    function validateUsername(username){
        if(username.trim() == ""){
            alert("username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-] {1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("invalid username");
        }
        return isMatching;
    }

    async function fetchUserDetail(username) {

        const url = `https://leetcode-stats-api.herokuapp.com/${username}`
        try{
            searchButton.textContent = "searching....";
            searchButton.disabled = true;
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("unable to fetch data");
            }
            const data = await response.json();
            console.log("logging data", data);
        }catch(errror){
            statsContainer.innerHTML = '<p>No data found'
        }
        finally{
            searchButton.textContent = "search"
            searchButton.disabled = false
        }
    }
    searchButton.addEventListener("click", function(){
        const username = userNameInput.value;
        console.log("login username", username);
        if(validateUsername(username)){
            fetchUserDetail(username);
        }
    })

})
