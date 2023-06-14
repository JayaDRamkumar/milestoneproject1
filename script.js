const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".userResult img"),
    cpuResult = document.querySelector(".cpuResult img"),
    result = document.querySelector(".result")
    optionImages = document.querySelectorAll(".optionimages");

    optionImages.forEach ((image, index) => {
        image.addEventListener('click', (e) => {
            image.classList.add("active");
            userResult.src = cpuResult.src = "images/rock.jpg";
            result.textContent = "Say...Shooot";
            optionImages.forEach((image2, index2)=> {
                index !== index2 && image2.classList.remove("active");
            });
            gameContainer.classList.add("start");
            let time = setTimeout (()=> {
                gameContainer.classList.remove("start");
                let imageSrc = e.target.querySelector("img").src;
                userResult.src = imageSrc;
                let randomNumber = Math.floor(Math.random() * 3);
                let cpuImages = ["images/rock.jpg", "images/paper.jpg", "images/scissors.jpg"];
                cpuResult.src = cpuImages[randomNumber];
                let cpuValue = ["R", "P", "S"][randomNumber];
                let userValue = ["R", "P", "S"][index];
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
                  result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
                }, 2500);
            
        });
    });