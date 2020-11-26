## Bug Report

## Current behavior
- Defining a request scoped provider in one module, and an interceptor (which uses such provider) in another module
- The interceptor cannot find the provider `Nest could not find Symbol(MagicNumber) element (this provider does not exist in the current context)`

## Input Code
<!-- REPL or Repo link if applicable: -->
Repo: https://github.com/go-diego-go/nest-request-scope-test

## Expected behavior
- The interceptor should be able to find and load the provider
- The provider must only be instantiated once

## Environment

<pre><code>
Nest version: 7.5.4
GraphQL module version: 7.8.2
</code></pre>