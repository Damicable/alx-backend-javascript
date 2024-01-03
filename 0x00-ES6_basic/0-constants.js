export function getTaskDescription() {
  const taskDescription = 'I prefer using const when I can.';
  return taskDescription;
}

export function getFallbackMessage() {
  return 'However, sometimes using let is okay.';
}

export function getTaskSummary() {
  let taskSummary = 'For instance, when ';
  taskSummary += 'the value of a variable needs to be updated.';
  taskSummary += ' ' + getFallbackMessage();

  return taskSummary;
}
