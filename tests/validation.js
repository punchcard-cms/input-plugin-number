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

const decimal = {
  target: {
    name: 'decimal',
    value: 1.00003,
  },
};

const floater = {
  target: {
    name: 'floater',
    value: '000001.00003',
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input), 'Valid number input returns true');
});

// Valid string number
test('valid string', t => {
  t.true(validation(string), 'Valid number as string returns true');
});

// Valid bad input returns error
test('validate number with decim is a number', t => {
  t.is(validation(badInput), 'number must be a number!', 'Return string if not valid');
});

// Valid bad input returns error
test('validate number with decimals is a number', t => {
  t.true(validation(decimal), 'Valid decimal input returns true');
});

// Valid bad input returns error
test('validate number with leading zeros is a number', t => {
  t.true(validation(floater), 'Valid floating input returns true');
});
