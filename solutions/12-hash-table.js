<<<<<<< HEAD
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
=======
import * as CRC32 from "crc-32";
// BEGIN
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635


// END