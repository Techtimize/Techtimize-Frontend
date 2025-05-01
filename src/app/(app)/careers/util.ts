const getPaginatedRecords = <T>(
  page: number,
  limit: number,
  data: T[]
): T[] => {
  const offset = (page - 1) * limit;
  return data.filter((_, i) => i >= offset && i < offset + limit);
};

export { getPaginatedRecords };
