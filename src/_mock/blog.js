import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'The Legend of Zelda: Breath of the Wild 2 Release Date Announced',
  'New Gameplay Trailer for Cyberpunk 2077 Reveals Stunning Graphics',
  'Epic Games Store Offers Free Download of Grand Theft Auto V',
  'Upcoming DLC for Assassin\'s Creed Valhalla Introduces New Storyline',
  'Fortnite Season 10 Brings Back Classic Map Locations',
  'New Expansion Pack for World of Warcraft: Shadowlands Now Available',
  'Marvel`s Spider-Man: Miles Morales Wins Game of the Year Award',
  'Nintendo Switch Pro Rumored to Have 4K Graphics and OLED Display',
  'Halo Infinite Multiplayer Beta Opens to Public',
  'Call of Duty: Warzone Season 5 Introduces New Map and Weapons',
  'Final Fantasy XVI Trailer Reveals Epic Storyline and Characters',
  'Apex Legends Season 11 Adds New Legend and Map Changes',
  'The Last of Us Part II Wins Best Narrative at The Game Awards',
  'Xbox Game Pass Adds Popular Indie Game Among Us',
  'New Pokemon Snap Sequel Announced for Nintendo Switch',
  'League of Legends Worlds Championship Breaks Viewership Records',
  'PlayStation 5 Exclusive Game Ratchet & Clank: Rift Apart Receives Rave Reviews',
  'Overwatch 2 Beta Test Begins Next Month',
  'Upcoming Xbox Series X Exclusive Game Hellblade II: Senua\'s Saga Teases Dark and Gritty World',
  'Minecraft Caves & Cliffs Update Adds New Biomes and Mobs',
  'Resident Evil Village Becomes Fastest-Selling Game in Franchise History',
  'Elden Ring Gameplay Trailer Reveals Open-World Action RPG',
  'Super Smash Bros. Ultimate Adds New Fighter from Tekken Series',
];

export const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.number.int(99999),
  comment: faker.number.int(99999),
  share: faker.number.int(99999),
  favorite: faker.number.int(99999),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
