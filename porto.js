function addRecommendation() {
    
    let recommendation = document.getElementById("new_recommendation").value
  
   
    if (recommendation != "" && recommendation.trim() != "") {
      console.log("New recommendation added")
      showPopup(true)
  
   
      const element = document.createElement("div")
      element.setAttribute("class", "recommendation")
      element.innerHTML = `<span>&#8220;</span>` + recommendation + `<span>&#8221;</span>`
  
      
      document.getElementById("all_recommendations").appendChild(element)
  
      
      document.getElementById("new_recommendation").value = ""
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }
  