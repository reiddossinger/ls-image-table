// index.js
const dscc = window.dscc;

const drawViz = (data) => {
  // Get the image URLs from the data
  const imageUrls = data.tables.DEFAULT.map(row => row['imageUrl']);

  // Clear the visualization container
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.innerHTML = '';

  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.style.width = '100px'; // Adjust size as needed
    img.style.height = '100px';
    img.style.margin = '5px';
    container.appendChild(img);
  });

  document.body.innerHTML = ''; // Clear existing content
  document.body.appendChild(container); // Append new content
};

dscc.subscribeToData(drawViz, { transform: dscc.transform.table });
