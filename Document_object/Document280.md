# Document.renamePublishProfile()

## Availability

Flash MX 2004.

## Usage

Document.renamePublishProfile([profileNewName])

## Parameters

### **profileNewName**

#### Type

```typescript
string?
```

#### Description

An optional parameter that specifies the new name for the profile. The new name must be unique. If the name is not specified, a default name is provided.

## Returns

true if the name is changed successfully; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Renames the current profile.

## Example

The following example renames the current profile to a default name and displays it:

```javascript
alert(fl.getDocumentDOM().renamePublishProfile());
```
