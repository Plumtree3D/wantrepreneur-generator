
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

  // Get the file name
  const fileName = "image.jpg";

const downloadFile = async (fileUrl, downloadFolder) => {


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

  console.log( 'opening an image...' );

  const imagePath = path.join( __dirname, fileName ),
        b64content = fs.readFileSync( imagePath, { encoding: 'base64' } );

  console.log( 'uploading an image...' );

  T.post( 'media/upload', { media_data: b64content }, function ( err, data, response ) {
    if ( err ){
      console.log( 'error:', err );
    }
    else{
      const image = data;
      console.log( 'image uploaded, adding description...' );

      T.post( 'media/metadata/create', {
        media_id: image.media_id_string,
        alt_text: {
          text: 'I am working on the alt text for this bot but since those images are randomly generated it will take some rethinking, sorry'
        }            
      }, function( err, data, response ){
        console.log( 'tweeting the image...' );

        T.post( 'statuses/update', {
          media_ids: [image.media_id_string]
        },
          function( err, data, response) {
            if (err){
              console.log( 'error:', err );
            }
            else{
              console.log( 'posted an image!' );
            };
          });
      });
    };
  });
      
