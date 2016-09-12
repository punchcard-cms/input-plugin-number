import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'number',
    value: 2,
  },
};

const string = {
  target: {
    name: 'number',
    value: '2',
  },
};

const badInput = {
  target: {
    name: 'number',
    value: 'foo',
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input), 'Valid input returns true');
});

// Valid string number
test('valid string', t => {
  t.true(validation(string), 'Valid number as string returns true');
});


// Valid bad input returns error
test('validate input is a number', t => {
  t.is(validation(badInput), 'number must be a number!', 'Return string if not valid');
});
