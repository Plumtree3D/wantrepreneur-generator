
const fs = require( 'fs' ),
      axios = require('axios'),
      http = require('https'),
      Twit = require( 'twit' ),
      path = require('path'),
      request = require('request'),
      config = require( path.join( __dirname, 'config.js' ) );


const T = new Twit( config );


// const API_ID =            
//      API_KEY =            


const data = {
    url: "https://projects.celesterobert.me/entrepreneur-quotes/",
    selector: "#container"
  }

const downloadFile = async (fileUrl, downloadFolder) => {
  // Get the file name
  const fileName = "image.jpg";

  // The path of the downloaded file on our machine
  const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
  try {
    const response = await axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'stream',
    });

    const w = response.data.pipe(fs.createWriteStream(localFilePath));
    w.on('finish', () => {
      console.log('Successfully downloaded file!');
    });
  } catch (err) { 
    throw new Error(err);
  }
}; 

// Create an image by sending a POST to the API.
request.post({ url: 'https://hcti.io/v1/image', form: data})
  .auth(API_ID, API_KEY)
  .on('data', function(data) {
    console.log(JSON.parse(data).url)
    const IMAGE_URL = JSON.parse(data).url;
    downloadFile(IMAGE_URL, __dirname);
  })



// T.post( 'statuses/update', { status: 'Look, I am tweeting!' }, function( err, data, response ) {
// console.log( data )
// } );

