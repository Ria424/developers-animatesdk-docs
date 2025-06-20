# Document.setMetadata()

## Availability

Flash 8.

## Usage

Document.setMetadata(strMetadata)

## Parameters

### **strMetadata**

#### Type

```typescript
string
```

#### Description

A string containing the XML metadata to be associated with the document. For more information, see the following description.

## Returns

True if successful; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Sets the XML metadata for the specified document, overwriting any existing metadata. The XML passed as *strMetadata* is validated and may be rewritten before being stored. If it cannot be validated as legal XML or violates specific rules, then the XML metadata is not set and false is returned. (If false is returned, there is no way to get more detailed error information.)
***Note:** Even if true is returned, the XML that is set may not be exactly the same string that you passed in. To get the exact value to which the XML was set, use [Document.getMetadata()](../Document_object/Document80.md).*
The format of the metadata is RDF that is compliant with the XMP specification. For more information about RDF and XMP, see the following sources:

- The RDF Primer at [Www.w3.org/TR/rdf-primer/](http://www.w3.org/TR/rdf-primer/)

- The RDF specification at [Www.w3.org/TR/1999/REC-rdf-syntax-19990222/](http://www.w3.org/TR/1999/REC-rdf-syntax-19990222/)

- The XMP home page at [Www.adobe.com/products/xmp/](http://www.adobe.com/products/xmp/)

## Example

The following examples show several different legal ways to represent the same data. In all of these cases but the second one, if the data were sent to Document.setMetadata(), it would not be rewritten (aside from removing line breaks).
In the first example, metadata is in tags, with different schemas placed in separate rdf:Description tags:

```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/1.1">
        <dc:title>Simple title</dc:title>
        <dc:description>Simple description</dc:description>
    </rdf:Description>
    <rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/">
        <xmp:CreateDate>2004-10-12T10:29-07:00</xmp:CreateDate>
        <xmp:CreatorTool>Flash Authoring WIN 8,0,0,215</xmp:CreatorTool>
    </rdf:Description>
</rdf:RDF>
```

In the second example, metadata is in tags, but with different schemas all in one rdf:Description
tag.
This example also includes comments, which will be ignored and discarded by the
Document.setMetadata():

```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <!-- This is before the first rdf:Description tag-->
    <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/1.1/">
        <dc:title>Simple title</dc:title>
        <dc:description>Simple description</dc:description>
    </rdf:Description>
    <!-- This is between the two rdf:Description tags-->
    <rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/">
        <xmp:CreateDate>2004-10-12T10:29-07:00</xmp:CreateDate>
        <xmp:CreatorTool>Flash Authoring WIN 8,0,0,215
</xmp:CreatorTool>
    </rdf:Description>
    <!-- This is after the second rdf:Description tag -->
</rdf:RDF>
```

In the third example, metadata is in attributes, and different schemas are all in one
rdf:Description tag:

```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns\#">
    <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/1.1/" dc:title="Simple title"
        dc:description="Simple description" />
    <rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/"
        xmp:CreateDate="2004-10-12T10:29-07:00" xmp:CreatorTool="Flash Authoring WIN 8,0,0,215" />
</rdf:RDF>
```

## See also

[Document.getMetadata()](../Document_object/Document80.md)
