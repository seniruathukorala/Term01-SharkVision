function calculateRequiredFinalMark(caObtained, caTotal, caWeightPercent, targetTotalMark) {
    let caMarkOutOf100 = (caObtained / caTotal) * 100;
    let caWeight = caWeightPercent / 100;
    let finalWeight = 1 - caWeight;
    let currentContribution = caMarkOutOf100 * caWeight;
    
    let neededContribution = targetTotalMark - currentContribution;
    let requiredFinalMark = Math.ceil(neededContribution / finalWeight);

    if (requiredFinalMark <= 0) {
        return { status: "achieved", mark: 0, message: "Target already achieved!" };
    } else if (requiredFinalMark > 100) {
        return { status: "impossible", mark: requiredFinalMark, message: "Target unreachable" };
    } else {
        return { status: "possible", mark: requiredFinalMark, message: "Target achievable" };
    }
}

calcBtn.addEventListener("click", () => {
    // 1. Get Values From The text Box
    const caObtained = parseFloat(document.getElementById("caObtained").value);
    const caTotal = parseFloat(document.getElementById("caTotal").value);
    const caWeightPercent = parseFloat(document.getElementById("caWeight").value);
    const targetTotalMark = parseFloat(document.getElementById("targetMark").value);

    // 2. Check the Values 
    if (isNaN(caObtained) || isNaN(caTotal) || isNaN(caWeightPercent) || isNaN(targetTotalMark)) {
        alert("Please fill all fields!");
        return;
    }
    if(caObtained>caTotal || caWeightPercent>100||caObtained<=0||caTotal<=0||caWeightPercent<0){
        alert("Please Insert Valid Values");
        return;
    }
    


    const statusText = document.getElementById("statusText");
    const markText = document.getElementById("markText");
    const messageText = document.getElementById("messageText");
    const resultBox = document.getElementById("resultBox");


    const result=calculateRequiredFinalMark(caObtained,caTotal,caWeightPercent,targetTotalMark)

    
    statusText.innerText = result.status;           
    markText.innerText = result.mark + "%";          
    messageText.innerText = result.message;         

    // To View a Result Box
    resultBox.style.display = "block";
})
