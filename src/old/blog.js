const posts = [
    {
        id: "post-1",
        title: "Hello World!",
        author: "Desirée Strand",
        date: "2025-08-27",
        content: [
          "Välkommen till det hörn av WWW där jag dokumenterar min resa inom programmering. Jag är dock inte helt nybörjare: jag har erfarenhet av gränssnittsdesign och webbutveckling från tidigare utbildning och ett par hobbyprojekt.",
          "Efter några år som konsult inom digital design har jag längtat tillbaka till programmeringen som utlopp för kreativitet och problemlösning. Jag gillar hur det får min hjärna att kännas, programmering är den bästa typen av hjärngympa för mig. Jag vill också fördjupa mina tidigare kunskaper och lära mig massor av nytt!",
          "Därför hoppade jag på en ny utbildning den här hösten, även fast jag trodde att jag aldrig skulle plugga igen efter min kandidatexamen. Jag ska bli fullstackutvecklare. Det känns jättekul!",
          "I måndags började vi med HTML. Jag känner mig ganska säker på HTML sedan tidigare och hittills har det mesta varit repetition. När jag började bygga den här bloggsidan i enkel HTML lärde jag mig dock mycket mer om semantik i HTML och hur man bör strukturera HTML-element som <code>main</code>, <code>section</code> och <code>article</code>! På den här sidan befinner sig till exempel alla <code>article</code> inom en och samma <code>section</code> i <code>main</code>, eftersom blogginläggen är samma typ av innehåll, och därför hör ihop i samma <code>section</code>. Jag har också lärt mig att en <code>article</code> bör ha en egen <code>header</code> och <code>footer</code>. The more you know!",
          "Jag ser fram emot att dela med mig av flera lärdomar. Vi hörs då!"
        ],
          category: "Utbildning",
    }
]

function renderPost(postData) {
    const container = document.querySelector('.blog-container')

    const articleElement = document.createElement('article')
    articleElement.id = postData.id

    const headerElement = document.createElement('header')
    const metaElement = document.createElement('p')
    metaElement.innerHTML = `
        <time datetime="${postData.date}">
            ${new Date(postData.date).toLocaleDateString("sv-SE", { day: "numeric", month: "long", year: "numeric" })}
        </time> - av ${postData.author}
    `
    const titleElement = document.createElement('h2')
    titleElement.textContent = postData.title

    headerElement.appendChild(metaElement)
    headerElement.appendChild(titleElement)
    articleElement.appendChild(headerElement)

    postData.content.forEach(paragraph => {
        const pElement = document.createElement('p')
        pElement.innerHTML = paragraph
        articleElement.appendChild(pElement)
    })

    const footerElement = document.createElement('footer')
    footerElement.innerHTML = `<p><strong>Kategori:</strong> ${postData.category}</p>`
    articleElement.appendChild(footerElement)

    container.appendChild(articleElement)
}

posts
.slice()
.sort((a, b) => new Date(b.date) - new Date(a.date))
.forEach(renderPost)