# Document.debugMovie()

## Availability

Flash Professional CS5.

## Usage

Document.DebugMovie(abortIfErrorsExist)

## Parameters

**abortIfErrorsExist** `boolean?false`; The default value is false. If set to true, the debug session will not start and the .swf window will not open if there are compiler errors. Compiler warnings will not abort the command.

## Description

Method; Invokes the Debug Movie command on the document.

## Example

The following example opens the current document in debug mode, but aborts the operation if compiler errors exist:

```javascript
fl.getDocumentDOM().debugMovie(1);
```
