// BEGIN
import { capitalize } from 'lodash';
export default function normalize(lesson) {
  if (lesson.name) lesson.name = capitalize(lesson.name);
  if (lesson.description) lesson.description = lesson.description.toLowerCase();
}
// END