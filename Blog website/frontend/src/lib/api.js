const FIREBASE_DOMAIN = 'https://quotes-1ead4-default-rtdb.firebaseio.com/';

export async function getAllQuotes() {
  const response = await fetch(`http://localhost:8000/api/allQuote`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }
  console.log(data.quotesList);
  const transformedQuotes = [];

  for (const quote in data.quotesList) {
    const quoteObj = {
      id: data.quotesList[quote]._id,
      author : data.quotesList[quote].author,
      text : data.quotesList[quote].text
    };
    transformedQuotes.push(quoteObj);
  }
  console.log(transformedQuotes);
  return transformedQuotes;
}

export async function getSingleQuote(quoteId) {
  const response = await fetch(`http://localhost:8000/api/getQuote/${quoteId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: quoteId,
    author : data.quoteFound.author,
    text : data.quoteFound.text
  };
  return loadedQuote;
}

export async function addQuote(quoteData) {
  console.log(quoteData);
  const response = await fetch(`http://localhost:8000/api/addQuote`, {
    method: 'POST',
    body: JSON.stringify(quoteData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}