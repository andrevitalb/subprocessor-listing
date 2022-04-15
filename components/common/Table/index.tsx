import React from "react"
import DataTable, {
	TableProps as DataTableProps,
	TableStyles,
} from "react-data-table-component"

const customStyles: TableStyles = {
	headCells: {
		style: {
			fontSize: "1rem",
			fontWeight: 600,
			minWidth: "150px !important",
		},
	},
	headRow: {
		style: {
			borderBottom: "1px solid #522929", // gray-200
			paddingBottom: ".75rem",
			paddingTop: ".75rem",
			width: "auto",
			minWidth: "100%",
		},
	},
	cells: {
		style: {
			wordBreak: "normal",
			overflowX: "auto",
			minWidth: "150px !important",
		},
	},
	rows: {
		style: {
			borderBottom: "none !important",
			fontSize: "1rem",
			paddingBottom: "1rem",
			paddingTop: "1rem",
			highlightOnHoverStyle: {
				backgroundColor: "#999999", // gray-200
			},
		},
	},
	tableWrapper: {
		style: {
			// Makes the table fit in the available width instead of showing
			// a horizontal scroll bar.
			tableLayout: "fixed",
			width: "auto",
			minWidth: "100%",
		},
	},
}

function Table<T>(props: DataTableProps<T>) {
	return <DataTable customStyles={customStyles} {...props} />
}

export default Table
