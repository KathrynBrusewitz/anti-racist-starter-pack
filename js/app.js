const booksData = [
  {
    title: "Teaching to Transgress",
    author: "Bell Hooks",
    url:
      "https://bookshop.org/books/teaching-to-transgress-education-as-the-practice-of-freedom/9780415908085",
  },
  {
    title: "There There",
    author: "Tommy Orange",
    url: "https://bookshop.org/books/there-there-9780525436140/9780525436140",
  },
  {
    title: "The Origin of Others",
    author: "Toni Morrison",
    url: "https://bookshop.org/books/the-origin-of-others/9780674976450",
  },
  {
    title: "Citizen: An American Lyric",
    author: "Claudia Rankine",
    url: "https://bookshop.org/books/citizen-an-american-lyric/9781555976903",
  },
  {
    title: "Race Matters",
    author: "Cornel West",
    url: "https://www.esowonbookstore.com/book/9780807008836",
  },
  {
    title:
      "Ghosts in the Schoolyard: Racism and School Closings on Chicago's South Side",
    author: "Eve L. Ewing",
    url:
      "https://bookshop.org/books/ghosts-in-the-schoolyard-racism-and-school-closings-on-chicago-s-south-side/9780226526027",
  },
  {
    title: "Your Silence Will Not Protect You",
    author: "Audre Lorde",
    url: "https://www.silverpress.org/your-silence-will-not-protect-you",
  },
  {
    title: "How to Be an Anti-Racist",
    author: "Ibram X. Kendi",
    url: "https://www.mahoganybooks.com/9780525509288",
  },
  {
    title: "Between the World and Me",
    author: "Ta-Nehisi Coates",
    url: "https://www.blackstonebookstore.com/book/9780812993547",
  },
  {
    title: "Emergent Strategy",
    author: "Adrienne Maree Brown",
    url: "https://www.blackstonebookstore.com/book/9781849352604",
  },
  {
    title: "Change Everything: Racial Capitalism and the Case for Abolition",
    author: "Ruth Wilson Gilmore",
    url: "https://pyramidbooks.indielite.org/book/9781642594140",
  },
  {
    title: "Assata: An Autobiography",
    author: "Assata Shakur",
    url: "https://pyramidbooks.indielite.org/book/9781783601783",
  },
  {
    title: "Feel Free",
    author: "Zadie Smith",
    url: "https://www.blackstonebookstore.com/book/9780143110255",
  },
  {
    title: "Who We Be: The Colorization of America",
    author: "Jeff Chang",
    url: "https://www.blackstonebookstore.com/book/9781250074898",
  },
  {
    title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
    author: "Safiya Noble",
    url: "https://www.mahoganybooks.com/9781479837243",
  },
  {
    title: "From #BlackLivesMatter to Black Liberation",
    author: "Keeanga-Yamahtta Taylor",
    url: "https://www.mahoganybooks.com/9781608465620",
  },
  {
    title:
      "Seize the Time: The Story of the Black Panther Party and Huey P. Newton",
    author: "Bobby Seale",
    url: "https://pyramidbooks.indielite.org/book/9780933121300",
  },
  {
    title: "The Denial of Antiblackness",
    author: "João H. Costa Vargas",
    url:
      "https://www.upress.umn.edu/book-division/books/the-denial-of-antiblackness",
  },
  {
    title: "So You Want to Talk About Race",
    author: "Ijeoma Oluo",
    url:
      "https://www.cafeconlibrosbk.com/product-page/so-you-want-to-talk-about-race",
  },
  {
    title: "Minor Feelings: An Asian American Reckoning",
    author: "Cathy Park Hong",
    url: "https://pyramidbooks.indielite.org/book/9781984820365",
  },
  {
    title: "The Autobiography of Malcolm X",
    author: "Alex Haley and Malcolm X",
    url: "https://www.blackstonebookstore.com/book/9780812419535",
  },
  {
    title: "Passing it on: A memoir",
    author: "Yuri Kochiyama",
    url: "https://pyramidbooks.indielite.org/book/9780934052375",
  },
  {
    title: "The Fire Next Time",
    author: "James Baldwin",
    url: "https://www.blackstonebookstore.com/book/9780679744726",
  },
  {
    title: "Are Prisons Obsolete?",
    author: "Angela Davis",
    url: "https://pyramidbooks.indielite.org/book/9781583225813",
  },
  {
    title: "Southern Horrors",
    author: "Ida B. Wells",
    url: "https://www.blackstonebookstore.com/book/9781515106685",
  },
  {
    title: "Black Skin, White Masks",
    author: "Franz Fanon",
    url:
      "http://abahlali.org/files/__Black_Skin__White_Masks__Pluto_Classics_.pdf",
  },
  {
    title: "The New Jim Crow: Mass Incarceration in the Age of Colorblindness",
    author: "Michelle Alexander",
    url: "https://www.mahoganybooks.com/9781620971932",
  },
  {
    title: "Exit West",
    author: "Mohsin Hamid",
    url: "https://pyramidbooks.indielite.org/book/9780735212206",
  },
  {
    title: "Women, Race & Class",
    author: "Angela Davis",
    url: "https://www.blackstonebookstore.com/book/9781556520747",
  },
  {
    title:
      "Biased: Uncovering the Hidden Prejudice That Shapes What We See, Think, and Do",
    author: "Jennifer L. Eberhardt",
    url:
      "https://bookshop.org/books/biased-uncovering-the-hidden-prejudice-that-shapes-what-we-see-think-and-do/9780735224933",
  },
  {
    title: "Stamped from the Beginning",
    author: "Ibram X. Kendi",
    url: "https://www.mahoganybooks.com/9781568584638",
  },
  {
    title:
      "They Can't Kill Us All: Ferguson, Baltimore, And A New Era In America's Racial Justice Movement",
    author: "Wesley Lowery",
    url: "https://www.mahoganybooks.com/9780316312493",
  },
  {
    title: "Radical Dharma: Talking Race, Love, and Liberation",
    author: "Jasmine Syedullah, Lama Rod Owens, and Angel Kyodo Williams",
    url: "https://pyramidbooks.indielite.org/book/9781623170981",
  },
  {
    title:
      "Fumbling Towards Repair: A Workbook for Community Accountability Facilitators",
    author: "Mariame Kaba and Shira Hassan",
    url: "https://www.blackstonebookstore.com/book/9781939202321",
  },
  {
    title: "Manufacturing Consent: The Political Economy of the Mass Media",
    author: "Edward S. Herman and Noam Chomsky",
    url: "https://www.blackstonebookstore.com/book/9780375714498",
  },
  {
    title: "Invisible Man",
    author: "Ralph Ellison",
    url: "https://pyramidbooks.indielite.org/book/9780679732761",
  },
];

const bookSection = document.getElementById("books");

const booksHTML = booksData
  .map((book) => {
    if (book.url.length < 1) {
      return `<div class="item"><b>${book.title}</b> by ${book.author}</div>`;
    } else {
      return `<div class="item"><a class="link" href="${book.url}" target="_blank"><b>${book.title}</b> by ${book.author}</a></div>`;
    }
  })
  .join(""); // delimiter

bookSection.innerHTML = booksHTML;
