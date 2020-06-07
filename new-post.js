/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const os = require('os');

function formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

const today = formatDate(new Date());

const front = [
  '---',
  'title:',
  'slug:',
  'image:',
  `date: ${today}`,
  'category:',
  'readTime:',
  'tags: []',
  '---',
].join(os.EOL);

const dirname = today;

fs.mkdirSync(`./src/posts/${dirname}/images`, { recursive: true });
fs.writeFileSync(`./src/posts/${dirname}/post.mdx`, front);
// eslint-disable-next-line no-console
console.log(`Start writing by running: 'code ./src/posts/${dirname}/post.mdx'`);
