## tl;dr

```bash
npm init
# install
npm install dts2hx --save-dev
npm install sortablejs --save
npm install @types/sortablejs --save

# run dts2hx
npx dts2hx sortablejs

# install hxnodejs
haxelib install hxnodejs

# don't forget to add `--library sortablejs` to your build
```

## small adjustments

```haxe
// @:jsRequire("sortablejs")
@:native('Sortable')
```

remove `@:jsRequire("sortablejs")` and add `@:native('Sortable')`

1. we will use the embedded js in the html
2. we want to make sure it uses the name `Sortable` and not `Sortablejs`
