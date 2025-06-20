# Timeline.expandFolder()

## Availability

Flash MX 2004.

## Usage

Timeline.expandFolder(bExpand \[, bRecurseNestedParents \[, index\]\])

## Parameters

### **bExpand**

#### Type

```typescript
boolean
```

#### Description

A boolean value that, if set to true, causes the method to expand the folder; false causes the method to collapse the folder.

### **bRecurseNestedParents**

#### Type

```typescript
boolean?
```

#### Description

A Boolean value that, if set to true, causes all the layers within the specified folder to be opened or closed, based on the *bExpand* parameter. This parameter is optional.

### **index**

#### Type

```typescript
number?
```

#### Description

A zero-based index of the folder to expand or collapse. Use -1 to apply to all layers (you also must set *bRecurseNestedParents* to true). This property is equivalent to the Expand All/Collapse All menu items in the Animate authoring tool. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Expands or collapses the specified folder or folders. If you do not specify a layer, this method operates on the current layer.

## Example

The following examples use this folder structure:

Folder 1 ***
--layer 7
--Folder 2 ****
----Layer 5

The following example expands Folder 1 only:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 1;
fl.getDocumentDOM().getTimeline().expandFolder(true);
```

The following example expands Folder 1 only (assuming that Folder 2 collapsed when Folder 1 last collapsed;
otherwise, Folder 2 appears expanded):

```javascript
fl.getDocumentDOM().getTimeline().expandFolder(true, false, 0);
```

The following example collapses all folders in the current timeline:

```javascript
fl.getDocumentDOM().getTimeline().expandFolder(false, true, -1);
```
