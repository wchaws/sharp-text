const sharp = require('sharp');
const svgtxt = `<?xml version="1.0" standalone="no"?>
<svg
  height="500"
  width="500">
  <text
  x="0" y="0"
  fill="white"
  text-anchor="start"
  font-size="80px"
  baseline-shift="-85%"
  font-family="Open Sans"
  >
  爱 nw
  </text>

  <text
  x="500" y="0"
  fill="white"
  text-anchor="end"
  font-size="80px"
  baseline-shift="-85%"
  font-family="Open Sans"
  >
  ne 我
  </text>

  <text
  x="0" y="500"
  fill="white"
  text-anchor="start"
  font-size="80px"
  baseline-shift="15%"
  font-family="Open Sans"
  >
  中 sw
  </text>

  <text
  x="500" y="500"
  fill="white"
  text-anchor="end"
  font-size="80px"
  baseline-shift="15%"
  line-height="10px"
  font-family="Open Sans"
  >
  se 华
  </text>
</svg>`;


(async () => {
  await sharp('in.png')
    .composite([
      { input: Buffer.from(svgtxt), blend: 'over' }
    ])
    .toFile('o.png');
})().catch(console.error)