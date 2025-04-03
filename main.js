import FamilyTree from './classes/familyTree.js';
  
// Creating a new FamilyTree
const family = new FamilyTree();

// Adding family members
family.addMember('John Doe', '1980-01-01','male');
family.addMember('Jane Doe', '1982-03-15', 'female');
family.addMember('Alex Doe', '2005-06-20', 'male');
family.addMember('Emily Doe', '2008-09-12', 'female');
family.addMember('Sarah Doe', '2028-04-03', 'female');
family.addMember('Michael Doe', '2030-07-18', 'male');

// Defining relationships
family.defineParentChild('John Doe', 'Alex Doe');
family.defineParentChild('Jane Doe', 'Alex Doe');
family.defineParentChild('John Doe', 'Emily Doe');
family.defineParentChild('Jane Doe', 'Emily Doe');
family.defineParentChild('Alex Doe', 'Sarah Doe');
family.defineParentChild('Alex Doe', 'Michael Doe');

// Updating details
family.updateMemberDetails('John Doe', { name: 'Jason Doe', details: {occupation: 'Engineer'}});

// Display descendants of selected person
family.displayDescendants('John Doe');
family.displayDescendants('Jason Doe');
family.displayDescendants('Jane Doe');
family.displayDescendants('Alex Doe');

//Display All information on selected person
family.displayInformation("Jason Doe")
family.displayInformation("Alex Doe")
