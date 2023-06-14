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
            let time = setTimeout
        });
    });