const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    console.log(fileName)
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];

    const imageParams = {
        Bucket: 'user-images-c1fb2595-d14a-4868-a60f-c5d49dd2dcd2',
        Key: `${uuidv4()}.${fileType}`,
        Body: fileName.buffer
    };

    return imageParams
};

module.exports = params;