import { Parser } from 'json2csv';

export function exportToCSV(data: any): string {
    const fields = [
        { label: 'Metric', value: 'metric' },
        { label: 'Value', value: 'value' },
        { label: 'Change', value: 'change' },
    ];

    const flattenData = [
        { metric: 'Total Revenue', value: data.performance.totalRevenue, change: data.performance.revenueChange },
        { metric: 'Cost Per Lead', value: data.performance.costPerLead, change: data.performance.cplChange },
        { metric: 'ROI', value: data.performance.roi, change: data.performance.roiChange },
        // Add more fields as needed
    ];

    const parser = new Parser({ fields });
    return parser.parse(flattenData);
}