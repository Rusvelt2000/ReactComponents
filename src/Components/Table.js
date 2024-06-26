import { Fragment } from "react";

function Table({ data, config, total }) {
  const renderColumns = config.map((column, index) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    } else {
      return <th key={index}>{column.label}</th>;
    }
  });

  const renderedRows = data.map((rowData, index) => {
    const renderedCells = config.map((column, index) => {
      return <td key={index}>{column.render(rowData)}</td>;
    });
    return <tr key={index}>{renderedCells}</tr>;
  });

  return (
    <table className="Table " cellSpacing={0}>
      <thead>
        <tr>{renderColumns}</tr>
      </thead>
      <tbody>
        {renderedRows}
        {total && (
          <tr>
            <td colSpan={config.length} className="currency total">
              <strong>Total: &nbsp; $ {total}</strong>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
