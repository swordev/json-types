import traverse from "json-schema-traverse";

export async function dropYamlAnchor(schema: any) {
  traverse(schema, {
    cb(s) {
      if (s.patternProperties) {
        if ("^x-" in s.patternProperties) delete s.patternProperties["^x-"];
        if (!Object.keys(s.patternProperties).length)
          delete s.patternProperties;
      }
    },
  });
}
