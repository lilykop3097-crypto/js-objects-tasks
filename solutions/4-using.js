// BEGIN
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
// END
