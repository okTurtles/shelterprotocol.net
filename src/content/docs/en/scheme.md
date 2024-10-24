---
title: "The 'shelter' URI Scheme"
---

## Introduction

The 'shelter' URI scheme identifies resources that can be reached through the
Shelter Protocol. These resources are generic and could take various forms.
For example, a resource could refer to a contract, a manifest or a file part,
among other options. Each resource is identified by a self-referencing hash,
which is in the CID format [[CID]](#ref-CID), using the BLAKE2b-256 digest
[[RFC7693]](#ref-RFC7693) and the Base58 [[BASE58]](#ref-BASE58) encoding.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be
interpreted as described in [[RFC2119]](#ref-RFC2119).

In this document, URIs are enclosed in '<' and '>' as described in Appendix C of
[[STD66]](#ref-STD66). Extra whitespace and line breaks are added to present
long URIs -- they are not part of the actual URI.

## Syntax of a 'shelter' URI

In its simplest form, a 'shelter' URI is the 'shelter:' string immediately
followed by a CID and nothing else.

The format syntax of a 'shelter' URI is described using the ABNF of
[[STD68]](#ref-STD68):

    shelterURI   = "shelter:" [ "//" authority "/" ] cid [ "?" query ]
    authority    = <authority, see [STD66], Section 3.2>
    query        = <query, see [STD66], Section 3.4>
    cid          = <segment, see [STD66], Section 3.4>

## Semantics and Operations

The 'shelter' URI scheme is used to identify resources that can be accessed
through the Shelter Protocol. The CID (Content Identifier) portion of the URI
uniquely identifies the resource, and the optional authority and query
components can be used to provide additional context or parameters for
accessing the resource.

When a 'shelter' URI is dereferenced, the client should use the Shelter Protocol
to retrieve the identified resource. The specific operations and behaviors
involved in this process are defined by the Shelter Protocol specification.

## Encoding

Any reserved characters, as defined in [[STD66]](#ref-STD66), MUST be encoded
when used in a 'shelter' URI.

## Examples

This section is non-normative.

A URI for a resource identified by the CID
'z9brRu3VMfgn81z36GzeKDsZBoUEjsNKccJA5BpZVsorhcefFnZT':

    <shelter:z9brRu3VMfgn81z36GzeKDsZBoUEjsNKccJA5BpZVsorhcefFnZT>

A URI for the current key named 'csk' for a resource (a smart contract, in
this case) identified by the CID
'z9brRu3VMfgn81z36GzeKDsZBoUEjsNKccJA5BpZVsorhcefFnZT':

    <shelter:z9brRu3VMfgn81z36GzeKDsZBoUEjsNKccJA5BpZVsorhcefFnZT?keyName=csk>

A URI for the current key named 'csk' for a resource (a smart contract, in
this case) identified by the CID
'z9brRu3VMfgn81z36GzeKDsZBoUEjsNKccJA5BpZVsorhcefFnZT', to be loaded from a
server located at the address 'example.com':

    <shelter:example.com/z9brRu3VMfgn81z36GzeKDsZBoUEjsNKccJA5BpZVsorhcefFnZT
    ?keyName=csk>

## Security Considerations

The security considerations for the 'shelter' URI scheme are primarily related
to the security of the Shelter Protocol itself. Implementers SHOULD ensure that
they follow best practices for secure protocol design and implementation, and
they MUST properly validate and sanitize any input or output related to
'shelter' URIs.

In particular, a Shelter resource can refer to computer code that could result
in dynamic code execution, such as smart contracts, or additional network
requests, such as interacting with a smart contract. In these cases,
implementers SHOULD take care to ensure that dynamically executed code has a
trusted provenance and is properly sandboxed, and that any interactions with
resources follow clear rules understood by users.

A current limitation of the Shelter URI scheme is that the specific semantics
and content type of a resource is context-dependent, which is something that
could be addressed by embedding content type information within a CID.
Implementers MAY enforce semantics and content type information though this
mechanism.

## References


<p id="ref-BASE58">
[BASE58] Nakamoto, S. and M. Sporny, "The Base58 Encoding Scheme",
<a href="https://datatracker.ietf.org/doc/html/draft-msporny-base58-03">draft-msporny-base58-03</a>,
March 2021.
<p>

<p id="ref-CID">
[CID] Benet, Juan, Ed., "CID (Content IDentifier) Specification",
<a href="https://github.com/multiformats/cid/blob/603f4570ba051192224dd1a3b131a6ebdd486b4f/README.md">CID</a>, December 2023.
</p>

<p id="ref-RFC2119">
[RFC2119] Bradner, S., "Key words for use in RFCs to Indicate Requirement
Levels", <a href="https://www.rfc-editor.org/bcp/bcp14">BCP 14</a>,
<a href="https://www.rfc-editor.org/rfc/rfc2119">RFC 2119</a>, March 1997.
</p>

<p id="ref-RFC7693">
[RFC7693] Saarinen, M., Ed. and J. Aumasson, "The BLAKE2 Cryptographic Hash and
Message Authentication Code (MAC)",
<a href="https://www.rfc-editor.org/rfc/rfc7693">RFC 7693</a>,
DOI 10.17487/RFC7693, November 2015.
</p>

<p id="ref-STD66">
[STD66] Berners-Lee, T., Fielding, R., and L. Masinter, "Uniform Resource Identifier (URI): Generic Syntax", STD 66,
<a href="https://www.rfc-editor.org/rfc/rfc3986">RFC 3986</a>, January 2005.
</p>

<p id="ref-STD68">
[STD68] Crocker, D. and P. Overell, "Augmented BNF for Syntax Specifications:
ABNF", STD 68, <a href="https://www.rfc-editor.org/rfc/rfc5234">RFC 5234</a>,
January 2008.
</p>
