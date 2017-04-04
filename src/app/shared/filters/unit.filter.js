
export function unitFilter(value, nom, gen, plu) {

  if (typeof gen === 'undefined') throw new ReferenceError('gen is not defined');
  if (typeof nom === 'undefined') throw new ReferenceError('nom is not defined');
  if (typeof plu === 'undefined') throw new ReferenceError('plu is not defined');

  let word = '';

  if (Math.abs(value).toString().includes('.')) {
    word = gen;
  } else if (value % 10 === 1 && value % 100 !== 11) {
    word = nom;
  } else {
    word = value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20) ? gen : plu;
  }

  return `${value} ${word}`;
}
