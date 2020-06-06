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

const booksSection = document.getElementById("books");

const booksHTML = booksData
  .map(
    (item) =>
      `<div class="item"><a class="link" href="${item.url}" target="_blank"><b>${item.title}</b> by ${item.author}</a></div>`
  )
  .join("");

booksSection.innerHTML = booksHTML;

const articlesData = [
  {
    title: `From Most Hated to American Hero: The Whitewashing of Martin Luther King Jr.`,
    author: `Michael Harriot`,
    url: `https://www.theroot.com/from-most-hated-to-american-hero-the-whitewashing-of-m-1824258876`,
  },
  {
    title: `United States Policing and "Gun Rights" Began With Slave Patrols`,
    author: `Roxanne Dunbar-Ortiz`,
    url: `https://truthout.org/articles/united-states-policing-and-gun-rights-began-with-slave-patrol/`,
  },
  {
    title: `Processes of Decolonization`,
    author: `Poka Laenui`,
    url: `https://static1.squarespace.com/static/562e7f2ae4b018ac41a6e050/t/59d003d1d55b41b151b3efe2/1506804694703/Laenui+-+Processes+of+Decolonization.pdf`,
  },
  {
    title: `Reformist reforms vs. abolitionist steps in policing`,
    url: `https://static1.squarespace.com/static/59ead8f9692ebee25b72f17f/t/5b65cd58758d46d34254f22c/1533398363539/CR_NoCops_reform_vs_abolition_CRside.pdf`,
  },
  {
    title: `Redlining: The Origin Story of Institutional Racism`,
    author: `Michael Harriot`,
    url: `https://www.theroot.com/redlining-the-origin-story-of-institutional-racism-1834308539`,
  },
  {
    title: `The Black Plague`,
    author: `Keeanga-Yamahtta Taylor`,
    url: `https://www.newyorker.com/news/our-columnists/the-black-plague`,
  },
  {
    title: `The school to prison pipeline, explained – Thoughtco`,
    author: ``,
    url: `https://www.thoughtco.com/school-to-prison-pipeline-4136170`,
  },
  {
    title: `This Is What You Get`,
    author: `Ashley Reese`,
    url: `https://jezebel.com/this-is-what-you-get-1843733893`,
  },
  {
    title: `If You Want To End Racism, Stop Forgiving Racists`,
    author: `Carol Anderson`,
    url: `https://www.huffpost.com/entry/opinion-anderson-racists-forgiveness-trump_n_5b6356b4e4b0de86f49f4161`,
  },
  {
    title: `The Source of Black Poverty Isn't Black Culture, It's American Culture`,
    author: `Philip Bump`,
    url: `https://www.theatlantic.com/politics/archive/2014/04/the-source-of-black-poverty-isnt-black-culture-its-american-culture/359937/`,
  },
  {
    title: `The Combahee River Collective Statement`,
    author: ``,
    url: `https://americanstudies.yale.edu/sites/default/files/files/Keyword%20Coalition_Readings.pdf`,
  },
  {
    title: `The Case for Reparations`,
    author: `Ta-Nehisi Coates`,
    url: `https://www.theatlantic.com/magazine/archive/2014/06/the-case-for-reparations/361631/`,
  },
  {
    title: `Using Immigrants to Shame America Blacks`,
    author: `Ishmael Reed`,
    url: `https://www.counterpunch.org/2018/01/30/using-immigrants-to-shame-america-blacks/`,
  },
  {
    title: `Martin Luther King and the 'polite' racism of white liberals`,
    author: `Jeanne Theoharis`,
    url: `https://www.washingtonpost.com/nation/2020/01/17/martin-luther-king-polite-racism-white-liberals/`,
  },
  {
    title: `So You Want To Fight White Supremacy`,
    author: `Ijeoma Oluo`,
    url: `https://medium.com/the-establishment/so-you-want-to-fight-white-supremacy-2b5735f22f9`,
  },
  {
    title: `Black Wall Street: The African American Haven That Burned and Then Rose From the Ashes`,
    author: `Victor Luckerson`,
    url: `https://www.theringer.com/2018/6/28/17511818/black-wall-street-oklahoma-greenwood-destruction-tulsa`,
  },
  {
    title: `Confronting anti-black racism in the Arab world`,
    author: `Susan Abulhawa`,
    url: `https://www.aljazeera.com/indepth/opinion/2013/06/201362472519107286.html`,
  },
  {
    title: `The day Philadelphia bombed its own people`,
    author: `Lindsey Norwood`,
    url: `https://www.vox.com/the-highlight/2019/8/8/20747198/philadelphia-bombing-1985-move`,
  },
  {
    title: `Inside the Modern Slave Trade Trapping African Migrants`,
    author: `Aryn Baker`,
    url: `https://time.com/longform/african-slave-trade/`,
  },
  {
    title: `In Defense of Looting`,
    author: `Vicky Osterweil`,
    url: `https://thenewinquiry.com/in-defense-of-looting/`,
  },
  {
    title: `America Wasn't a Democracy, Until Black Americans Made It One`,
    author: `Nikole-Hannah Jones`,
    url: `https://www.nytimes.com/interactive/2019/08/14/magazine/black-history-american-democracy.html`,
  },
  {
    title: `How the civil rights movement opened the door to immigrants of color`,
    author: `Rebekah Barber`,
    url: `https://www.facingsouth.org/2017/02/how-civil-rights-movement-opened-door-immigrants-color`,
  },
  {
    title: `Racism, Stress and Black Death`,
    author: `Clint Smith`,
    url: `https://www.newyorker.com/news/news-desk/racism-stress-and-black-death`,
  },
  {
    title: `A Most American Terrorist: The Making of Dylann Roof`,
    author: `Rachel Kaadzi Ghansah`,
    url: `https://www.gq.com/story/dylann-roof-making-of-an-american-terrorist`,
  },
  {
    title: `The Double Standard of the American Riot`,
    author: `Kellie Carter Jackson`,
    url: `https://www.theatlantic.com/culture/archive/2020/06/riots-are-american-way-george-floyd-protests/612466/`,
  },
  {
    title: `Nothing Short of Liberation`,
    author: `Khury Petersen-Smith and Brian bean`,
    url: `https://www.jacobinmag.com/2015/06/black-lives-matter-police-brutality-allies/`,
  },
  {
    title: `How white women use strategic tears to silence women of colour`,
    author: `Ruby Hamad`,
    url: `https://www.theguardian.com/commentisfree/2018/may/08/how-white-women-use-strategic-tears-to-avoid-accountability`,
  },
  {
    title: `What a World Without Cops Would Look Like`,
    author: `Madison Pauly`,
    url: `https://www.motherjones.com/crime-justice/2020/06/police-abolition-george-floyd/`,
  },
  {
    title: `Nothing to add: A Challenge to White Silence in Racial Discussions`,
    author: `Robin DiAngelo`,
    url: `https://robindiangelo.com/2018site/wp-content/uploads/2016/01/Nothing-to-Add-Published.pdf`,
  },
  {
    title: `The End of the Postracial Myth`,
    author: `Nikole-Hannah Jones`,
    url: `https://www.nytimes.com/interactive/2016/11/20/magazine/donald-trumps-america-iowa-race.html`,
  },
];

const articlesSection = document.getElementById("articles");

articlesSection.innerHTML = articlesData
  .map((item) => {
    const author = item.author ? ` by ${item.author}` : ``;
    return `<div class="item"><a class="link" href="${item.url}" target="_blank"><b>${item.title}</b>${author}</a></div>`;
  })
  .join("");
