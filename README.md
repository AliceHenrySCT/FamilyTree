# Family Tree JavaScript Project
### Created By Alice Henry

## Overview
This project implements a Family Tree application using JavaScript, providing a structured way to store family members, define their relationships, and retrieve detailed information.

## Components
- `Person.js`: Defines individuals with their personal information, including name, birthdate, gender, and familial relationships.
- `FamilyTree.js`: Manages a collection of `Person` objects, allowing additions, relationship definitions, and detailed queries.
- `main.js`: Demonstrates creating family members, setting up their relationships, updating personal details, and displaying descendants and personal information.

## Usage
- Add new family members.
- Define parent-child relationships.
- Update individual details such as name changes or additional information.
- Display descendants of family members.
- Display complete information about specific individuals.

## Wins and Challenges
### Wins
- Successfully implemented relationship definition logic, ensuring bidirectional linkage (parents ↔ children).
- Added the `displayInformation` function to clearly present complete details for any family member, significantly enhancing usability and clarity.
- Built a robust structure (`Person` and `FamilyTree` classes) allowing easy scalability.

### Challenges
- The most significant struggle was correctly implementing the `displayDescendants` function, specifically generating accurate relation titles (e.g., child, grandchild, great-grandchild). Handling recursive depth and dynamically assigning relation titles required careful consideration and multiple iterations to refine.
