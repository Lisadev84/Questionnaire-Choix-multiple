document.addEventListener("DOMContentLoaded", function () {

    //Récupération du bouton de validation des réponses
    const submitButton = document.querySelector("button");
    //sélectionne toutes les réponses de type radio
    let answers = document.querySelectorAll('input[type="radio"]');
    //crée un tableau pour stocker les réponses de l'utilisateur
    answersChoice = [];
    //désactive le bouton par défaut
    submitButton.disabled = true;
    



    // fonction qui comptabilisent les réponses checkées par l'utilisateur et condition qui libère la validation des réponses

    answers.forEach((answer) => {
        answer.addEventListener("click", function () {
            let clics = document.querySelectorAll('input[type="radio"]:checked');
            if (clics.length == 10) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        });
    });

    //Ecoute du bouton de validation des réponses
    submitButton.addEventListener("click", function (e) {
        e.preventDefault;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        //récupère les réponses validées par l'utilisateur
        let answersUser = document.querySelectorAll('input[name]:checked');
        // Toutes les corrections
        let correct_answer = document.querySelectorAll('.correct_answer');
        //crée un tableau pour stocker les réponses correctes
        let correctAnswers = [1, 2, 2, 3, 3, 2, 3, 3, 3, 1];
        let score = 0;
        let form = document.querySelector("form")
        //  boucle sur l'ensemble des réponses utilisateur
        for (let i = 0; i < answersUser.length; i++) {
            //comparaison avec le tableau des réponses correctes et affichage des réponses correctes

            if (answersUser[i].value == correctAnswers[i]) {
                answersUser[i].classList.add("correct");
                answersUser[i].style.color = 'green';
                score++;
            } else {
                answersUser[i].classList.add("incorrect");
                answersUser[i].style.color = 'red';
                correct_answer[i].style.visibility = 'visible';

            };
        };
        //affichage du score et désactivation du bouton validation
        alert("Score final: " + score + "/10");
        submitButton.disabled = true;
       
    });
})




























