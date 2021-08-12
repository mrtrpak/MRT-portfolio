import React from 'react';

import './soccer-table-headers.styles.scss';

const TableHeaders = () => {
  const tableHeaders = [
    "pos", "team name", "badge", "gp", "w", "d", "l", "pts", "gf", "ga", "gd"
  ];

  return (
    <thead>
      <tr className="soccer-headers-row">
        { tableHeaders.map(
          header => (<th key={header} className={`soccer-header ${header}`}>{header.toUpperCase()}</th>)
        )}
      </tr>
    </thead>
  );
};

export default TableHeaders;