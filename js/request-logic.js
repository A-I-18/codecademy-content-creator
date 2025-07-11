// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!

const contentTypes = Object.freeze({
  'HTML': 'text/html',
  'CSS': 'text/css',
  'JPEG': 'image/jpeg',
  'TEXT': 'text/plain'
});

function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];

  switch (extension) {
    case 'html':
      return contentTypes.HTML;
    case 'css':
      return contentTypes.CSS;
    case 'jpeg':
    case 'jpg':
      return contentTypes.JPEG;
    default:
      return contentTypes.TEXT;
  }
}