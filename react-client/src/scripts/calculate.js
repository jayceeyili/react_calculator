const calculate = obj => {
  let left = parseFloat(obj.left);
  let right = parseFloat(obj.right);

  switch (obj.operater) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return left / right;
    default:
  }
};

export default calculate;
