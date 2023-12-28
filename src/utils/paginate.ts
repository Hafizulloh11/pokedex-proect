export function paginate(items: any, currentPage: number, pageSize: number) {
  const startIdx = pageSize * (currentPage - 1);
  const finishIdx = startIdx + pageSize;

  return items?.slice(startIdx, finishIdx);
}
