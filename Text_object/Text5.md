# Text.description

## Availability

Flash MX 2004.

## Description

Property; a string that is equivalent to the Description field in the Accessibility panel. The description is read by the screen reader.

## Example

The following example retrieves the description of the object:

````javascript
var doc = fl.getDocumentDOM();
var desc = doc.selection[0].description;
````

The following example sets the description of the object:

````javascript
var doc = fl.getDocumentDOM();
doc.selection[0].description= "Enter your name here";
````
