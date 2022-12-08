import operate from '../logic/operate';

test('adds 1 + 2 to equal 3', () => {
  const result = operate('1', '2', '+');
  expect(result).toBe('3');
});

test('subtraction from 20 - 14 equals 6', () => {
  const result = operate('20', '14', '-');
  expect(result).toBe('6');
});

test('Multiplication of 15 * 2 is equal to 30', () => {
  const result = operate('15', '2', 'x');
  expect(result).toBe('30');
});

test('The division of 18 / 2 is equal to 9', () => {
  const result = operate('18', '2', '÷');
  expect(result).toBe('9');
});

test("The division of 135 / 0 is equal to 'Can't divide by 0.'", () => {
  const result = operate('135', '0', '÷');
  expect(result).toBe("Can't divide by 0.");
});

test('The module of 15 and 3 is equal to 0', () => {
  const result = operate('15', '3', '%');
  expect(result).toBe('0');
});

test('The module of 15 and 0 is equal to "Cant find modulo as cant divide by 0."', () => {
  const result = operate('15', '0', '%');
  expect(result).toBe("Can't find modulo as can't divide by 0.");
});
