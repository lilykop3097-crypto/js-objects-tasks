// BEGIN
<<<<<<< HEAD
import { capitalize } from 'lodash';
export default function normalize(lesson) {
  if (lesson.name) lesson.name = capitalize(lesson.name);
  if (lesson.description) lesson.description = lesson.description.toLowerCase();
}
=======
export default function normalize(lesson){
  if (lesson.name) {
    lesson.name = lesson.name.charAt(0).toUpperCase() + lesson.name.slice(1).toLowerCase();
  }
  if (lesson.description) {
    lesson.description = lesson.description.toLowerCase();
  }
};
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635
// END