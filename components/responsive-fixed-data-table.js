import React from 'react';
import Dimensions from 'react-dimensions';
import { Table } from 'fixed-data-table';

@Dimensions({
  containerStyle: {
    flexGrow: 1,
    display: 'flex',
  },
})
class ResponsiveTable extends React.Component {
  render() {
    const { children, containerWidth, containerHeight, ...props } = this.props;
    return (
      <Table
        {...props}
        width={containerWidth}
        height={containerHeight}
      >
        { children }
      </Table>
    );
  }
}

export default ResponsiveTable;
