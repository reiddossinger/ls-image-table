// index.js
const dscc = require('@google/dscc');
const local = require('./localMessage.js');  // For local testing only

const drawViz = (data) => {
  const imgContainer = document.createElement('div');
  imgContainer.style.textAlign = "center";

  const img = document.createElement('img');
  img.src = data.tables.DEFAULT[0].imageUrl;  // Assuming 'imageUrl' is your field name
  img.alt = 'Image';
  img.style.maxWidth = '100%';
  img.style.height = 'auto';

  imgContainer.appendChild(img);
  document.body.appendChild(imgContainer);
};

dscc.subscribeToData(drawViz, {transform: dscc.tableTransform});
