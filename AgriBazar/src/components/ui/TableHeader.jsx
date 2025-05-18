import React from 'react';

const TableHeader = ({ headers }) => (
  <thead className="bg-gray-50 dark:bg-neutral-700">
    <tr>
      {headers.map((header, index) => (
        <th
          key={index}
          className="px-6 py-3 font-medium text-gray-500 dark:text-gray-400 text-xs text-left uppercase tracking-wider"
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;