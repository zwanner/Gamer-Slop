
const fetch = require('node-fetch');

// Read the game IDs from gameids.txt
const gameIds = [730,570,578080,1172470,271590,252490,440,1085660,1938090,413150,377160,2252570,236390,1086940,1599340,2195250,359550,304930,553850,1245620,892970,431960,1604030,1203220,1782210,394360,2215430,221100,381210,230410,1248130,227300,289070,480,1142710,1151340,1222670,436150,218620,4000,1145350,251570,1091500,39210,2357570,294100,252950,105600,346110];

// Function to fetch news for a specific app ID
async function fetchNews(appId) {
    const url = `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=${appId}&count=5`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Function to fetch news for all app IDs
async function fetchAllNews() {
    const allNews = [];
    for (const appId of gameIds) {
        const news = await fetchNews(appId);
        allNews.push(news);
    }
    return allNews;
}

// Fetch news for all app IDs
fetchAllNews()
    .then((news) => {
        console.log(news);
        news.forEach((appNews) => {
            appNews.appnews.newsitems.forEach((item) => {
                console.log(item.title);
                // console.log(item.contents);
            });
        });
    })
    .catch((error) => {
        console.error(error);
    });

// fetchNews(730)
//     .then((news) => {
//         console.log(news);
//         // Do something with the news data
//         news.appnews.newsitems.forEach((item) => {
//             console.log(item.title);
//             console.log(item.contents);
//         });
//     })
//     .catch((error) => {
//         console.error(error);
//     });
