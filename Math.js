module.exports = class Math {
  static add(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    let answer = a + b;
    return answer;
  }

  static async addThen(a, b, callback) {
    let answer = this.add(a, b);
    return await callback(answer);
  }
}