# Integrating C functions

The C-level extensibility mechanism lets you implement Animate extensibility files using a combination of JavaScript and C code.

***Note:** Adobe Animate runs on 64-bit operating systems only. All C extensions for this release must be built (or rebuilt) for 64 bit support.*

The process for implementing this capability is summarized in the following steps:

1. Define functions using the C or C++ language.

2. Bundle them in a DLL file (Windows) or a shared library (Macintosh).

3. Save the DLL file or library in the appropriate location:

    - Windows 10:

        *boot drive*\\Users\\*username*\\AppData\\Local\\Adobe\\*Animate (or flash) version*\\*language*\\Configuration\\External Libraries

        or:

        %LOCALAPPDATA%\\Adobe\\*Animate (or flash) version*\\*language*\\Configuration\\External Libraries

    - Mac OS X:
        Macintosh HD/Users/*username*/Library/Application Support/Adobe/*Animate (or flash) version*/*language*/Configuration/External Libraries

4. Create a JSFL file that calls the functions.

5. Run the JSFL file from the Commands menu in the Animate authoring environment. For more information, see ["Sample DLL implementation"](#sample-dll-implementation).

## C-level extensibility and the JavaScript interpreter

The C code in the DLL or shared library interacts with the Animate JavaScript API at three different times:

- At startup, to register the library’s functions

- When the C function is called, to unpack the arguments that are being passed from JavaScript to C

- Before the C function returns, to package the return value

To accomplish these tasks, the interpreter defines several data types and exposes an API. Definitions for the data types and functions that are listed in this section appear in the mm_jsapi.h file. For your library to work properly, you must include the `mm_jsapi.h` file at the top of each file in your library, with the following line:

```c
#include "mm_jsapi.h"
```

Including the `mm_jsapi.h` file includes the `mm_jsapi_environment.h` file, which defines the MM_Environment structure.

To get a copy of the `mm_jsapi.h` file, extract it from the sample ZIP or SIT file (see ["Sample DLL implementation"](#sample-dll-implementation)), or copy the following code into a file that you name mm_jsapi.h:

```c
#ifndef _MM_JSAPI_H_

#define _MM_JSAPI_H_

/* Public data types */

typedef struct JSContext JSContext;
typedef struct JSObject JSObject;
typedef long long jsval;
#ifndef JSBool
typedef long long JSBool;
#endif

typedef JSBool (*JSNative)(JSContext *cx, JSObject *obj, unsigned int argc, jsval *argv, jsval *rval);

/* Possible values for JSBool */

#define JS_TRUE 1
#define JS_FALSE 0

/* Public functions */

/**
 * Define a function in the JavaScript environment.
 * @param name The name of the function to define.
 * @param call The function to call when the function is invoked.
 * @param nargs The number of arguments the function takes.
 * @return `JS_TRUE` if the function was defined successfully, `JS_FALSE` otherwise.
 */
#define JS_DefineFunction(name, call, nargs) \
    (mmEnv.defineFunction ? (*(mmEnv.defineFunction))(mmEnv.libObj, name, call, nargs) : JS_FALSE)

/**
 * Convert a JavaScript value to a string.
 * @param ctx The JavaScript context.
 * @param value The value to convert.
 * @param pLength Pointer to store the length of the string.
 * @return The string representation of the value, or null pointer if conversion failed.
 */
#define JS_ValueToString(ctx, value, pLength) \
    (mmEnv.valueToString ? (*(mmEnv.valueToString))(ctx, value, pLength) : (char*)0)

/**
 * Convert a JavaScript value to a byte array.
 * @param ctx The JavaScript context.
 * @param value The value to convert.
 * @param pLength Pointer to store the length of the byte array.
 * @return The byte array representation of the value, or null pointer if conversion failed.
 */
#define JS_ValueToBytes(ctx, value, pLength) \
    (mmEnv.valueToBytes ? (*(mmEnv.valueToBytes))(ctx, value, pLength) : (unsigned char*)0)

/**
 * Convert a JavaScript value to an integer.
 * @param ctx The JavaScript context.
 * @param value The value to convert.
 * @param pLong Pointer to store the converted integer.
 * @return `JS_TRUE` if conversion was successful, `JS_FALSE` otherwise.
 * 
 * Notes:
 * 
 * - If the value is not an integer, the function will round it to the nearest integer.
 * 
 * - If the value is a string, an attempt will be made to convert it to an integer. If the conversion fails, the resulting integer will be 0.
**/
#define JS_ValueToInteger(ctx, value, pLong) \
    (mmEnv.valueToInteger ? (*(mmEnv.valueToInteger))(ctx, value, pLong) : JS_FALSE)

/**
 * Convert a JavaScript value to a double.
 * @param ctx The JavaScript context.
 * @param value The value to convert.
 * @param pDouble Pointer to store the converted double.
 * @return `JS_TRUE` if conversion was successful, `JS_FALSE` otherwise.
 */
#define JS_ValueToDouble(ctx, value, pDouble) \
    (mmEnv.valueToDouble ? (*(mmEnv.valueToDouble))(ctx, value, pDouble) : JS_FALSE)

/**
 * Convert a JavaScript value to a boolean.
 * @param ctx The JavaScript context.
 * @param value The value to convert.
 * @param pBool Pointer to store the converted boolean.
 * @return `JS_TRUE` if conversion was successful, `JS_FALSE` otherwise.
 */
#define JS_ValueToBoolean(ctx, value, pBool) \
    (mmEnv.valueToBoolean ? (*(mmEnv.valueToBoolean))(ctx, value, pBool) : JS_FALSE)

/**
 * Convert a JavaScript value to an object.
 * @param ctx The JavaScript context.
 * @param value The value to convert.
 * @param pObject Pointer to store the converted object.
 * @return `JS_TRUE` if conversion was successful, `JS_FALSE` otherwise.
 */
#define JS_ValueToObject(ctx, value, pObject) \
    (mmEnv.valueToObject ? (*(mmEnv.valueToObject))(ctx, value, pObject) : JS_FALSE)

/**
 * Convert a string to a JavaScript value.
 * @param ctx The JavaScript context.
 * @param bytes The string to convert.
 * @param size The size of the string.
 * @param pValue Pointer to store the converted value.
 * @return `JS_TRUE` if conversion was successful, `JS_FALSE` otherwise.
 */
#define JS_StringToValue(ctx, bytes, size, pValue) \
    (mmEnv.stringToValue ? (*(mmEnv.stringToValue))(ctx, bytes, size, pValue) : JS_FALSE)

/**
 * Convert a byte array to a JavaScript value.
 * @param ctx The JavaScript context.
 * @param bytes The byte array to convert.
 * @param size The size of the byte array.
 * @param pValue Pointer to store the converted value.
 * @return `JS_TRUE` if conversion was successful, `JS_FALSE` otherwise.
 */
#define JS_BytesToValue(ctx, bytes, size, pValue) \
    (mmEnv.bytesToValue ? (*(mmEnv.bytesToValue))(ctx, bytes, size, pValue) : JS_FALSE)

/**
 * Convert a double to a JavaScript value.
 * @param ctx The JavaScript context.
 * @param doubleValue The double to convert.
 * @param pValue Pointer to store the converted value.
 * @return `JS_TRUE` if conversion was successful, `JS_FALSE` otherwise.
 */
#define JS_DoubleToValue(ctx, doubleValue, pValue) \
    (mmEnv.doubleToValue ? (*(mmEnv.doubleToValue))(ctx, doubleValue, pValue) : JS_FALSE)

/**
 * Convert an integer to a JavaScript value.
 * @param longValue The integer to convert.
 * @return The JavaScript value representation of the integer.
 */
#define JS_IntegerToValue(longValue) (((jsval)(longValue) << 1) | 1)

/**
 * Convert a boolean to a JavaScript value.
 * @param boolValue The boolean to convert.
 * @return The JavaScript value representation of the boolean.
 */
#define JS_BooleanToValue(boolValue) (((jsval)(boolValue) << 3) | 6)

/**
 * Convert an object to a JavaScript value.
 * @param objValue The object to convert.
 * @return The JavaScript value representation of the object.
 */
#define JS_ObjectToValue(objValue) ((jsval)(objValue))

/**
 * Get the type of a JavaScript object.
 * @param obj The object to check.
 * @return The type of the object as a string (unsigned short *), or null pointer if not defined.
 */
#define JS_ObjectType(obj) \
    (mmEnv.objectType ? (*(mmEnv.objectType))(obj) : (char*)0)

/**
 * Create a new array object.
 * @param ctx The JavaScript context.
 * @param length The length of the array.
 * @param pValue Pointer to the values to initialize the array with.
 * @return A pointer to the new array object, or null pointer if creation failed.
 */
#define JS_NewArrayObject(ctx, length, pValue) \
    (mmEnv.newArrayObject ? (*(mmEnv.newArrayObject))(ctx, length, pValue) : (JSObject*)0)

/**
 * Get the length of a JavaScript array.
 * @param ctx The JavaScript context.
 * @param obj The array object.
 * @return The length of the array, or -1 if the operation failed.
 */
#define JS_GetArrayLength(ctx, obj) \
    (mmEnv.getArrayLength ? (*(mmEnv.getArrayLength))(ctx, obj) : -1)

/**
 * Get an element from a JavaScript array.
 * @param ctx The JavaScript context.
 * @param obj The array object.
 * @param idx The index of the element to get.
 * @param pValue Pointer to store the retrieved value.
 * @return `JS_TRUE` if the operation was successful, `JS_FALSE` otherwise.
 */
#define JS_GetElement(ctx, obj, idx, pValue) \
    (mmEnv.getElement ? (*(mmEnv.getElement))(ctx, obj, idx, pValue) : JS_FALSE)

/**
 * Set an element in a JavaScript array.
 * @param ctx The JavaScript context.
 * @param obj The array object.
 * @param idx The index of the element to set.
 * @param pValue Pointer to the value to set.
 * @return `JS_TRUE` if the operation was successful, `JS_FALSE` otherwise.
 */
#define JS_SetElement(ctx, obj, idx, pValue) \
    (mmEnv.setElement ? (*(mmEnv.setElement))(ctx, obj, idx, pValue) : JS_FALSE)

/**
 * Execute a JavaScript script.
 * @param ctx The JavaScript context.
 * @param obj The object to execute the script in.
 * @param script The script to execute.
 * @param size The size of the script.
 * @param pValue Pointer to store the result of the script execution.
 * @return `JS_TRUE` if the script was executed successfully, `JS_FALSE` otherwise.
 */
#define JS_ExecuteScript(ctx, obj, script, size, pValue) \
    (mmEnv.executeScript ? (*(mmEnv.executeScript))(ctx, obj, script, size, (LPCTSTR)__FILE__, \ __LINE__, pValue) : JS_FALSE)

/**
 * Report an error in the JavaScript context.
 * @param ctx The JavaScript context.
 * @param error The error message to report.
 * @param size The size of the error message.
 * @return `JS_TRUE` if the error was reported successfully, `JS_FALSE` otherwise.
 */
#define JS_ReportError(ctx, error, size) \
    (mmEnv.reportError ? (*(mmEnv.reportError))(ctx, error, size) : JS_FALSE)

/* Private data types, macros, and globals */

typedef struct
{
    JSObject *libObj;
    JSBool (*defineFunction)(JSObject *libObj, unsigned short *name, JSNative call, unsigned int nargs);
    unsigned short *(*valueToString)(JSContext *cx, jsval v, unsigned int *pLength);
    unsigned char *(*valueToBytes)(JSContext *cx, jsval v, unsigned int *pLength);
    JSBool (*valueToInteger)(JSContext *cx, jsval v, long *lp);
    JSBool (*valueToDouble)(JSContext *cx, jsval v, double *dp);
    JSBool (*valueToBoolean)(JSContext *cx, jsval v, JSBool *bp);
    JSBool (*valueToObject)(JSContext *cx, jsval v, JSObject **op);
    JSBool (*stringToValue)(JSContext *cx, unsigned short *b, unsigned int sz, jsval *vp);
    JSBool (*bytesToValue)(JSContext *cx, unsigned char *b, unsigned int sz, jsval *vp);
    JSBool (*doubleToValue)(JSContext *cx, double dv, jsval *vp);
    unsigned short *(*objectType)(JSObject *obj);
    JSObject *(*newArrayObject)(JSContext *cx, unsigned int length, jsval *vp);
    long (*getArrayLength)(JSContext *cx, JSObject *obj);
    JSBool (*getElement)(JSContext *cx, JSObject *obj, unsigned int idx, jsval *vp);
    JSBool (*setElement)(JSContext *cx, JSObject *obj, unsigned int idx, jsval *vp);
    JSBool (*executeScript)(JSContext *cx, JSObject *obj, unsigned short *script, unsigned int sz, unsigned short *file, unsigned int lineNum, jsval *rval);
    JSBool (*reportError)(JSContext *cx, unsigned short *error, unsigned int sz);
} MM_Environment;

extern MM_Environment mmEnv;

// Declare the external entry point and linkage
#ifdef _WIN32
#ifndef _MAC
// Windows
__declspec(dllexport) void MM_InitWrapper(MM_Environment *env, unsigned int envSize);
#endif
#else
extern void MM_InitWrapper(MM_Environment *env, unsigned int envSize);
#endif

#define MM_STATE \
/* Definitions of global variables */
MM_Environment mmEnv;
void MM_InitWrapper(MM_Environment *env, unsigned int envSize)
{
    extern void MM_Init();

    char **envPtr = (char **)env;
    char **mmPtr = (char **)(&mmEnv);
    char **envEnd = (char **)((char *)envPtr + envSize);
    char **mmEnd = (char **)((char *)mmPtr + sizeof(MM_Environment));

    /* Copy fields from env to mmEnv, one pointer at a time */
    while (mmPtr < mmEnd && envPtr < envEnd)
        *mmPtr++ = *envPtr++;

    /* If env doesn't define all of mmEnv's fields, set extras to NULL */
    while (mmPtr < mmEnd)
        *mmPtr++ = (char *)0;

    /* Call user's MM_Init function */
    MM_Init();
}

#endif /* _MM_JSAPI_H_ */
```

## Sample DLL implementation

This section illustrates how to build a simple DLL implementation. If you want to see how the process works without actually building the DLL yourself, you can install the sample DLL files that are provided in the Samples.zip file; the files are located in the ExtendingAnimate/dllSampleComputeSum folder. (For information on downloading the Samples.zip file, see ["Sample implementations"](../Introduction/Sample_implementations.md)) Extract the sample files from the dllSampleComputeSum.dmg or dllSampleComputeSum.zip file, and then do the following:

- Store the Sample.jsfl file in the Configuration/Commands directory (see ["Saving JSFL files"](../Introduction/Working_with_the_JavaScript_API.md)).

- Store the Sample.dll file in the Configuration/External Libraries directory (see ["Integrating C functions"](#integrating-c-functions)).

- In the Animate authoring environment, select `Commands > Sample`. The trace statement in the JSFL file sends the results of the function defined in Sample.dll to the Output panel.

The rest of this section discusses the development of the sample. In this case, the DLL contains only one function, which adds two numbers. The C code is shown in the following example:

```c
// Source code in C
// Save the DLL or shared library with the name "Sample".

#include "mm_jsapi.h"

// A sample function
// Every implementation of a JavaScript function must have this signature.
JSBool computeSum(JSContext *ctx, JSObject *obj, unsigned int argc, jsval *argv, jsval *rval)
{
    long a, b, sum;

    // Make sure the right number of arguments were passed in. 
    if (argc != 2)
        return JS_FALSE;

    // Convert the two arguments from jsvals to longs.
    if (JS_ValueToInteger(ctx, argv[0], &a) == JS_FALSE
        || JS_ValueToInteger(ctx, argv[1], &b) == JS_FALSE)
        return JS_FALSE;

    /* Perform the actual work. */ 
    sum = a + b;

    /* Package the return value as a jsval. */
    *rval = JS_IntegerToValue(sum);

    /* Indicate success. */ 
    return JS_TRUE;
}
```

After writing this code, build the DLL file or shared library, and store it in the appropriate Configuration/External Libraries directory (see ["Integrating C functions"](#integrating-c-functions)). Then create a JSFL file with the following code, and store it in the Configuration/Commands directory (see ["Saving JSFL files"](../Introduction/Working_with_the_JavaScript_API.md)).

```javascript
// JSFL file to run C function defined above. 
var a = 5;
var b = 10;
var sum = Sample.computeSum(a, b);
fl.trace("The sum of " + a + " and " + b + " is " + sum );
```

To run the function defined in the DLL, select `Commands > Sample` in the Animate authoring environment.
