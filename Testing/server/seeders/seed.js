const db = require('../config/connection');
const { User, Slop } = require('../models');
const userSeeds = require('./userSeeds.json');
const slopSeeds = require('./slopSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Slop', 'slops');
    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < slopSeeds.length; i++) {
      const { _id, slopAuthor } = await Slop.create(slopSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: slopAuthor },
        {
          $addToSet: {
            slops: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
