var books = [
    {
        author: "Thomas Mann",
        title: "Death in Venice",
        desciption: `One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self.`
    },
    {
        author: "James Joyce",
        title: "A portrait of the artist as a young man",
        desciption: `This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character. `
    },
    {
        author: "E. M. Forster", 
        title: "A room with a view", 
        description: `This work displays an unusually perceptive view of British society in the early 20th century.It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narroe mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson.`
    },
    {
        author: "Isabel Allende", 
        title: "The house of spirits", 
        description: `Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet's dictatorship.`
    },
    {
        author: "Isabel Allende", 
        title: "Of love and shadows", 
        description: `The whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship.`
    }
];

function findBook() {
    var form = document.getElementsByTagName("form")[0];
    var author = form.author.value;
    var title = form.title.value;
    for (let book of books) {
        if (book.author === author || book.title === title) {
            form.author.value = book.author;
            form.title.value = book.title;
            form.description.value = book.description;
            return;
        }
    }
    form.description.value = "Book Not Found";
}

document.getElementById("find").addEventListener("click", findBook);
