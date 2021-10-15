export default class Team {
  constructor() {
    this.member = new Set();
  }

  add(obj) {
    if (this.member.has(obj)) throw new Error('Такой персонаж в команде уже есть');
    this.member.add(obj);
  }

  addAll(...allChar) {
    allChar.forEach((item) => this.member.add(item));
  }

  toArray() {
    return Array.from(this.member);
  }
}
