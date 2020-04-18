function URLify(string) {
    return string.trim().replace(/\s/g, '%20');
  }

  console.log(URLify('tahida parveen'))
  console.log(URLify('www.thinkful.com / tauh ida par veen'))