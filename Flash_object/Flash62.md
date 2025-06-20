# Flash.runScript()

## Availability

Flash MX 2004.

## Usage

fl.runScript(fileURI [, funcName [, arg1, arg2, ...]])

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the name of the script file to execute.

### **funcName**

#### Type

```typescript
string?
```

#### Description

A string that identifies a function to execute in the JSFL file that is specified in *fileURI*. This parameter is optional.

### **arg**

#### Type

```typescript
string?
```

#### Description

An optional parameter that specifies one or more arguments to be passed to *funcname*.

## Returns

The function's result as a string, if *funcName* is specified; otherwise, nothing.

### Type

```typescript
string | void
```

## Description

Method; executes a JavaScript file. If a function is specified as one of the arguments, it runs the function and also any code in the script that is not within the function. The rest of the code in the script runs before the function is run.

## Example

Suppose there is a script file named testScript.jsfl in the root directory on the C drive and its contents are as follows:

```javascript
function testFunct(num, minNum) {
    fl.trace("in testFunct: 1st arg: " + num + " 2nd arg: " + minNum);
}
for (var i = 0; i < 2; i++) {
    fl.trace("in for loop i=" + i);
}
fl.trace("end of for loop");
// End of testScript.jsfl
```

If you issue the following command,

```javascript
fl.runScript("file:///C|/testScript.jsfl", "testFunct", 10, 1);
```

the following information appears in the Output panel:

```text
in for loop i=0
in for loop i=1
end of for loop
in testFunct: 1st arg: 10 2nd arg: 1
```

You can also just call testScript.jsfl without executing a function, as follows:

```javascript
fl.runScript("file:///C|/testScript.jsfl");
```

This produces the following in the Output panel:

```text
in for loop i=0
in for loop i=1
end of for loop
```
