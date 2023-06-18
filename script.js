    const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".userResult img"),
    cpuResult = document.querySelector(".cpuResult img"),
    result = document.querySelector(".result")
    iconImage = document.querySelectorAll(".iconImage");

    // console.log(gameContainer,userResult,cpuResult,result,iconImage)

    iconImage.forEach((image, index) => {
        image.addEventListener("click", (e) => {
          image.classList.add("active");
    //         userResult.src = cpuResult.src = "images/rock.jpg";
    //         result.textContent = "Say...Shooot";
            iconImage.forEach((image2, index2) => {
                // console.log(index,index2)
                index !== index2 && image2.classList.remove("active");
            });
    //         gameContainer.classList.add("start");
    //         let time = setTimeout (()=> {
    //             gameContainer.classList.remove("start");
                let imageSrc = e.target.querySelector("img").src;
               
                userResult.src = imageSrc;

                //  console.log(imageSrc)
                let randomNumber = Math.floor(Math.random() * 3);

                // console.log(randomNumber)
                let cpuImages = ["/./assests/rock.jpg", "./assests/paper.jpg", "./assests/scissor.jpg"];
                cpuResult.src = cpuImages[randomNumber];
                let cpuValue = ["R", "P", "S"][randomNumber];
                let userValue = ["R", "P", "S"][index];
                // console.log(cpuValue,userValue)
                let outcomes = { 
                    RR: "Draw",
                    RP: "Cpu",
                    RS: "User",
                    PP: "Draw",
                    PR: "User",
                    PS: "Cpu",
                    SS: "Draw",
                    SR: "Cpu",
                    SP: "User",
                  };
                  let outComeValue = outcomes[userValue + cpuValue];
                  console.log(outComeValue);
                  result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Wins!!`;
    //             }, 2500);
            
        });
    });