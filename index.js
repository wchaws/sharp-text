const sharp = require('sharp');
const svgtxt = `<?xml version="1.0" standalone="no"?>
<svg
  height="500"
  width="500">
  <text
  text-anchor="middle"
  x="50%" y="50%"
  fill="white"
  font-size="50px"
  font-family="Open Sans"
  font-style="Medium"
  >
  Hello World 你好世界
  </text>
</svg>`;


(async () => {
  await sharp('in.png')
    .composite([
      { input: Buffer.from(svgtxt), blend: 'over' }
    ])
    .toFile('o.png');
})().catch(console.error)