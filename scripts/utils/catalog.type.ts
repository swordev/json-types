/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface JsonTypesCatalog {
  $schema?: string;
  types: JsonType[];
}
export interface JsonType {
  enabled?: boolean;
  name: string;
  url: string;
  keywords?: string[];
  patches?: {
    removeYamlAnchor?: boolean;
    additionalProperties?: boolean;
  };
}
