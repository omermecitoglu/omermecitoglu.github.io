function getVisibleArea(el: HTMLElement) {
  const boundingBox = el.getBoundingClientRect();
  return Math.min(boundingBox.bottom, window.innerHeight) - Math.max(boundingBox.top, 0);
}

export function findMostVisibleSection() {
  const sections = Array.from(document.getElementsByTagName("section"));
  sections.sort((a, b) => getVisibleArea(b) - getVisibleArea(a));
  return sections[0];
}
