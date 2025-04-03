import Person from "./person.js";

// Represents a family tree containing family members and their relationships.
export default class FamilyTree {
    constructor() {
      this.members = {}; // Store members by name for easy access
    }
  
    // Add a new family member
    addMember(name, birthdate, gender) {
      const newPerson = new Person(name, birthdate, gender);
      this.members[name] = newPerson;
    }
  
    // Define parent-child relationship
    defineParentChild(parentName, childName) {
      const parent = this.members[parentName];
      const child = this.members[childName];
  
      if (parent && child) {
        parent.addChild(child);
        child.addParent(parent);
      } else {
        console.error('Parent or child not found');
      }
    }
  
    // Update individual member's details
    updateMemberDetails(name, newDetails) {
      const person = this.members[name];
    
      if (person) {
        // Update name if provided
        if (newDetails.name && newDetails.name !== name) {
          this.members[newDetails.name] = person; // Update key in the members object
          delete this.members[name]; // Remove old entry
          person.name = newDetails.name;
        }
    
        // Update birthdate if provided
        if (newDetails.birthdate) {
          person.birthdate = newDetails.birthdate;
        }

        // Update gender if provided
        if (newDetails.gender) {
          person.gender = newDetails.gender;
        }
    
        // Merges additional details
        if (newDetails.details) {
          person.details = { ...person.details, ...newDetails.details };
        }
      } else {
        console.error('Person not found');
      }
    }

    
    // Displays descendants of a given family member
    displayDescendants(name, depth = 0) {
      const person = this.members[name];
  
      if (!person) {
        console.error('Person not found');
        return;
      }
  
      const indentation = '  '.repeat(depth);
      var child = 'Child';
      var generation = child;

      if(depth>=2){
        child = 'Grandchild';
        generation = 'great '.repeat(depth-2) + child;
        } 
      
      if(depth == 0){
        console.log(`${indentation}- ${person.name}`);
      }
      else{
        console.log(`${indentation}- ${person.name} (${generation})`);
      }
      
        
  
      for (const child of person.children) {
        this.displayDescendants(child.name, depth + 1);
      }
    }

    // Displays detailed information of a specified family member
    displayInformation(name) {
      const person = this.members[name];
    
      if (!person) {
        console.error('Person not found');
        return;
      }
    
      console.log(`Name: ${person.name}`);
      console.log(`Birthdate: ${person.birthdate}`);
      console.log(`Gender: ${person.gender}`);
    
      if (Object.keys(person.details).length > 0) {
        console.log('Additional Details:');
        for (const [key, value] of Object.entries(person.details)) {
          console.log(`  ${key}: ${value}`);
        }
      }
    
      if (person.children.length > 0) {
        console.log('Children:');
        person.children.forEach(child => {
          console.log(`  - ${child.name}`);
        });
      }

      if (person.parents.length > 0) {
        console.log('Parents:');
        person.parents.forEach(parent => {
          console.log(`  - ${parent.name}`);
        });
      }
    }  
  }