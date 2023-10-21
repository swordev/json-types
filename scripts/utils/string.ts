export function camelize(input: string) {
  return input
    .toLowerCase()
    .replace(/([-_][a-z])/g, (s) =>
      s.toUpperCase().replace("-", "").replace("_", "")
    );
}

export function capitalize(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function quote(pattern: string) {
  return pattern.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}

export function compare(v1: string, v2: string) {
  const regex = /\r?\n/g;
  return v1.replace(regex, "\n").trim() === v2.replace(regex, "\n").trim();
}
