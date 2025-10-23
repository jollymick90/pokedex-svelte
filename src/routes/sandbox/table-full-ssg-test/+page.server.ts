import { generateTestData } from '$lib/utils/table-sandbox';

export const prerender = true;


export function load() {
    
    const ROW_COUNT = 1000;
    const COL_COUNT = 20;
    const tableData = generateTestData(ROW_COUNT, COL_COUNT);
    const colHeaders: string[] = 
    tableData.length > 0
      ? Array.from({ length: COL_COUNT }, (_, i) => `Campo ${i + 1}`)
      : [];
    return {
        tableData,
        colHeaders
    };
}