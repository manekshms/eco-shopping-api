const path = require('path');
const axios = require('axios');

const getProductImage = async (req, res) => {
  const fileName = req.params.name;
  const bucketNameFromEnv = process.env.FIRESTORE_BUCKET_NAME;
  const bucketName = encodeURIComponent(bucketNameFromEnv);
  const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/';
  const token = path.parse(fileName).name;
  const downloadLink = `${
    baseUrl + bucketName
  }/o/${fileName}?alt=media&token=${token}`;
  const resp = await axios.get(downloadLink, { responseType: 'arraybuffer' });
  res.set({ 'Content-Type': resp.headers['content-type'] });
  return res.send(resp.data);
};

module.exports = {
  getProductImage,
};
