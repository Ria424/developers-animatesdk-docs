# Flash.publishDocument()

## Availability

Flash CS5 Professional.

## Usage

fl.publishDocument( flaURI [, publishProfile] )

## Parameters

### **flaURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the path of the FLA file that should be silently published.

### **publishProfile**

#### Type

```typescript
string
```

#### Description

A string that specifies the publish profile to use when publishing. If this parameter is omitted, the default publish profile is used.

## Returns

### Type

```typescript
boolean
```

## Description

Method; publishes a FLA file without opening it. This API opens the FLA in a headless mode and publishes the SWF (or whatever the profile is set to). The second parameter (publishProfile) is optional. The return value is a boolean indicating if the profile was found or not. In the case where the second parameter is not supplied, the return value is always true.

## Example

The following example prompts the user to select a FLA file and silently publishes it using the "Default" publish profile:

```javascript
var uri = fl.browseForFileURL("select", "select a FLA file to publish");
var publishProfileName = "Default";
fl.publishDocument(uri, publishProfileName);
```
