// BEGIN
<<<<<<< HEAD
export default function getDomainInfo(url) {
  const protocolSeparator = '://';
  const separatorIndex = url.indexOf(protocolSeparator);

  if (separatorIndex === -1) {
      return { scheme: 'http', name: url };
  }

  const scheme = url.slice(0, separatorIndex);
  const name = url.slice(separatorIndex + protocolSeparator.length);
  return { scheme, name };
}
=======
export default function getDomainInfo(url){
    let scheme = 'http';
    let name = url;
  
    if (url.startsWith('https://')) {
      scheme = 'https';
      name = url.slice(8); 
    } else if (url.startsWith('http://')) {
      scheme = 'http';
      name = url.slice(7); 
    }
  
    return { scheme, name };
  };
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635
// END
