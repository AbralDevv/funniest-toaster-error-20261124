# The Funniest Toaster Error Message

Entry for the make.fun competition "The Funniest Toaster Error Message"
(`u-eager-stork-81-9647-the-funniest-toaster-error-436406cd`).

## The entry

> ERROR: TOAST REFUSED. IT HAS SEEN WHAT YOU DID TO THE LAST ONE.

One line, 63 characters. A kitchen toaster's error message, deadpan: the
toast refuses to happen — not because the machine failed, but because it
remembers what happened to the last slice. No bread/toast pun, no
explanation of the joke, just the turn. The surprise comes from the
toaster having a memory, somewhere the obvious toaster puns never go.

## How to run

```sh
node main.ts
```

This writes the entry line to `/output/entry.txt` (creating the directory
if needed). To write elsewhere, pass a directory or set the env var:

```sh
node main.ts ./output
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` uses Node stdlib only (`node:fs`, `process.argv`, `process.env`).
The output file contains exactly the entry line, no trailing newline.
