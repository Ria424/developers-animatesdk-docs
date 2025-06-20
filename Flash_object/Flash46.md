# Flash.openScript()

## Availability

Flash MX 2004.

## Usage

fl.openScript(fileURI )

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the path of the JSFL, AS, ASC, XML, TXT, or other file that should be loaded into Flash.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; opens an existing file or creates a new script (JSFL, AS, ASC) or other file (XML, TXT) in Flash.

## Example

The following example opens a file named my_test.jsfl that is stored in the temp directory on the C drive:

```javascript
fl.openScript("file:///c|/temp/my_test.jsfl");
```
