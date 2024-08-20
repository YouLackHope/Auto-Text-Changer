const TextChanger = document.querySelector(".container")


const Careers = ["PROGRAMMER", "Web Developer", "Freelancer", "Instructor"];

let CareersIndex = 0;

let CharIndex = 0;

updateCareer();

function updateCareer () {
    CharIndex++;
    TextChanger.innerHTML = `<h1>I AM  ${Careers[CareersIndex].slice(0, 1) === "I " ? "AN " : "A " }${Careers[CareersIndex].slice(0,CharIndex)}</h1>`;
    if (CharIndex === Careers[CareersIndex].length) {
        CareersIndex++;
        CharIndex = 0;
    }

    if (CareersIndex === Careers.length) {
        CareersIndex = 0;
    }

    setTimeout (updateCareer, 400);

}

