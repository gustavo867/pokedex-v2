function FormatId(id: number) {
  if (id <= 9) {
    return id.toFixed(2).replace(id.toString(), "").replace(".", "#");
  }
  if (id <= 99) {
    return id.toFixed(1).replace(id.toString(), "").replace(".", "#");
  } else {
    return `#`;
  }
}

export default FormatId;
