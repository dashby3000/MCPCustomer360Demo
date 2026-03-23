export function jsonText(value) {
  return JSON.stringify(value, null, 2);
}

export function textContent(text) {
  return [{ type: "text", text }];
}

export function toolResult(summary, structuredContent) {
  return {
    content: textContent(summary),
    structuredContent
  };
}

export function bulletListResult(title, items, structuredContent) {
  const lines = [title, ...items.map((item) => `- ${item}`)];
  return {
    content: textContent(lines.join("\n")),
    structuredContent
  };
}

export function resourceResult(uri, value) {
  return {
    contents: [
      {
        uri,
        mimeType: "application/json",
        text: jsonText(value)
      }
    ]
  };
}

export function byId(items, key, value) {
  return items.find((item) => item[key] === value);
}

export function sortByNumber(items, accessor, descending = true) {
  return items.slice().sort((left, right) => {
    const delta = accessor(left) - accessor(right);
    return descending ? -delta : delta;
  });
}
