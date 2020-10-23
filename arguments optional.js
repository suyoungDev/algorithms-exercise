function addTogether(){
  let args = Array.from(arguments);

  return args.some( n => typeof n !== "number")
    ? undefined
    : args.length > 1
      ? args.reduce( (acc, n) => (acc+=n), 0)
      : n => (typeof n=== "number" ? n +args[0] : undefined );
}


function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}
