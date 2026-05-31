// BEGIN
import crc32 from 'crc-32';

export const make = () => [];

export const set = (map, key, value) => {
  const hash = crc32(key) >>> 0;
  const existing = map[hash];

  if (existing === undefined) {
    map[hash] = [key, value];
    return true;
  }

  if (existing[0] === key) {
    existing[1] = value;
    return true;
  }

  return false;
};

export const get = (map, key, defaultValue = null) => {
  const hash = crc32(key) >>> 0;
  const existing = map[hash];

  if (existing !== undefined && existing[0] === key) {
    return existing[1];
  }

  return defaultValue;
};

// END