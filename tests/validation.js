import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'number',
    value: 'foo bar baz',
  },
  all: {
    number: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    number: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});

// Invalid input
test('validate correct input', t => {
  const ip = input;
  ip.target.value = '';

  t.is(validation(ip, settings), 'number cannot be left blank!', 'Return string if not valid');
});
