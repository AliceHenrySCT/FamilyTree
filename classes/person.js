// Represents a person with personal details and relationships.
export default class Person {
    constructor(name, birthdate, gender) {
      this.name = name;
      this.birthdate = birthdate;
      this.gender = gender;
      this.parents = [];
      this.children = [];
      this.details = {};
    }
  
    // Add child to this person
    addChild(childNode) {
      this.children.push(childNode);
    }

    // Add parent to this person
    addParent(parentNode) {
      this.parents.push(parentNode);
    }

  }