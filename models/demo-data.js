var Activity = require( './activity' );


module.exports.initDatabase = function() {
  
  /********************* IMPORTANT !!! ************************
  need to figure out how to use demo data in dev. mode AND
  with webpack-dev-server (which currently hi-jacks dev. mode)
  *************************************************************/

  //if( app.get('env') === 'development' ) {

    Activity.remove().exec(); // clear database

    Activity.collection.insertMany( demoData, function(err,r) {

      if( err )
        console.log( "error loading demo data:", err );
      else
        console.log( "seeded database with " + r.insertedCount + " records\n" );
    });

  //}
};

// test test
var demoData = [

  {
    'title' : 'Affordable Pottery and Glassware by Local Artists',
    'description' : 'Some truly amazing pieces, and totally worth browsing, even if your not in the market to buy -- although the prices are totally affordable.',
    'image' : 'http://someurl...',
    'category' : 'museum/gallery',
    'region' : {
       longitude: -122.269195,
       latitude: 37.877361
    }
  },

  {
    'title' : 'Best Local Grocery Store',
    'description' : 'Lots of quality stuff -- priced so you will not have to rub elbows with the riff-raff while you shop.',
    'image' : 'http://someurl...',
    'category' : 'groceries',
    'region' : {
       longitude: -122.269948,
       latitude: 37.878923
    }
  },

  {
    'title' : 'World-Famous Chez Panisse Restaurant',
    'description' : 'Gordon Ramsay WISHES he could cook like this! Pricey (~$100), but worth it. Dont bother trying to get reservations for the main restaurant, but the cafe is just as good, and usually has a few spots, with just a slightly more limited menu.',
    'image' : 'http://someurl...',
    'category' : 'restaurant',
    'region' : {
       longitude: -122.268963,
       latitude: 37.879590
    }
  },

  {
    'title' : 'Chat With Published Local Authors',
    'description' : 'Little corner book shop targeting the Birkenstock-wearing wheat-grass-drinking college town demographic... which is why I love it so much!',
    'image' : 'http://someurl...',
    'category' : 'books',
    'region' : {
       longitude: -122.268875,
       latitude: 37.880460
    }
  },

  {
    'title' : 'Pizza To Corrupt Your Soul',
    'description' : 'I honestly dont know how they do it, but I budget about $100/wk for pizza at this place.',
    'image' : 'http://someurl...',
    'category' : 'restaurant',
    'region' : {
       longitude: -122.269528,
       latitude: 37.879975
    }
  },

  {
    'title' : 'Quiet Little Hotel, Near Everything Downtown',
    'description' : 'Great little family-run hotel with a fantastic cafe on the ground floor. On one of the major shopping streets in Berkeley, but a few blocks away from the grittier area downtown.',
    'image' : 'http://someurl...',
    'category' : 'hotel',
    'region' : {
       longitude: -122.269355,
       latitude: 37.879590
    }
  },

  {
    'title' : 'Very beautiful rose garden',
    'description' : 'Very peaceful rose garden with views, nice tennis courts too',
    'image' : 'http://someurl...',
    'category' : 'garden',
    'region' : {
        longitude: -122.26940,
        latitude: 37.88765
    }
  },

  {
    'title' : "Peaceful trail walk",
    'description' : 'Great 30 minute trial walk, great views!!',
    'image' : 'http://someurl...',
    'category' : 'hiking',
    'region' : {
      longitude: -122.26442,
      latitude: 37.88647
    }
  },

  {
    'title' : 'Large softball field for biking, basketball, or soccer!',
    'description' : 'Great for groups to play sports!!',
    'image' : 'http://someurl...',
    'category' : 'sports',
    'region' : {
      longitude: -122.26204,
      latitude: 37.88484
    }
  },

  {
    'title' : 'Walk through and smell the eucalyptus trees here',
    'description' : 'There are benches for you to sit and enjoy the natural setting',
    'image' : 'http://someurl...',
    'category' : 'hiking',
    'region' : {
      longitude: -122.26429,
      latitude: 37.87094
    }
  },

  {
    'title' : 'Cozy space for working remotely!',
    'description' : 'Fast free wifi, upstairs area is very cozy and there are plenty of outlets!',
    'image' : 'http://someurl...',
    'category' : 'coffee',
    'region' : {
      longitude: -122.26832,
      latitude: 37.87155
    }
  }

];
