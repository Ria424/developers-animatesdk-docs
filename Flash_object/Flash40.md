# Flash.mapPlayerURL()

## Availability

Flash MX 2004.

## Usage

fl.mapPlayerURL(URI [, returnMBCS])

## Parameters

### **URI**

#### Type

```typescript
string
```

#### Description

A string that contains the escaped Unicode URL to map.

### **returnMBCS**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that you must set to true if you want an escaped MBCS path returned. Otherwise, the method returns UTF-8. The default value is false. This parameter is optional.

## Returns

A string that is the converted URL.

### Type

```typescript
string
```

## Description

Method; Maps an escaped Unicode URL to a UTF-8 or MBCS URL. Use this method when the string will be used in ActionScript to access an external resource. You must use this method if you need to handle multibyte characters.

## Example

The following example converts a URL to UTF-8 so the player can load it:

```javascript
var url = MMExecute("fl.mapPlayerURL(" + myURL + ", false);");
mc.loadMovie(url);
```
