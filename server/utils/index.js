const Path = require('path')

const levenshteinDistance = (str1, str2, caseSensitive = false) => {
  if (!caseSensitive) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
  }
  const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null));
  for (let i = 0; i <= str1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j += 1) {
    track[j][0] = j;
  }
  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator, // substitution
      );
    }
  }
  return track[str2.length][str1.length];
}
module.exports.levenshteinDistance = levenshteinDistance

const cleanString = (str) => {
  if (!str) return ''

  // replace accented characters: https://stackoverflow.com/a/49901740/7431543
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

  const availableChars = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
  const cleanChar = (char) => availableChars.indexOf(char) < 0 ? '?' : char

  var cleaned = ''
  for (let i = 0; i < str.length; i++) {
    cleaned += cleanChar(str[i])
  }
  return cleaned
}
module.exports.cleanString = cleanString

module.exports.isObject = (val) => {
  return val !== null && typeof val === 'object'
}

function normalizePath(path) {
  const replace = [
    [/\\/g, '/'],
    [/(\w):/, '/$1'],
    [/(\w+)\/\.\.\/?/g, ''],
    [/^\.\//, ''],
    [/\/\.\//, '/'],
    [/\/\.$/, ''],
    [/\/$/, ''],
  ]
  replace.forEach(array => {
    while (array[0].test(path)) {
      path = path.replace(array[0], array[1])
    }
  })
  return path
}

module.exports.comparePaths = (path1, path2) => {
  return (path1 === path2) || (normalizePath(path1) === normalizePath(path2))
}