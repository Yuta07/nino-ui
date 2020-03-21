import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

storiesOf('Table', module).add('all', () => (
  <>
    <Container>
      <Table>
        <TableRow type="header">
          <TableHeader width={25}>column1</TableHeader>
          <TableHeader width={25}>column2</TableHeader>
          <TableHeader width={25}>column3</TableHeader>
          <TableHeader width={25}>column4</TableHeader>
        </TableRow>
        <TableRow type="body">
          <TableBody width={25}>body1</TableBody>
          <TableBody width={25}>body2</TableBody>
          <TableBody width={25}>body3</TableBody>
          <TableBody width={25}>body4</TableBody>
        </TableRow>
      </Table>
    </Container>
    <Container>
      <Table>
        <TableRow type="header">
          <TableHeader width={25}>name</TableHeader>
          <TableHeader width={25}>email</TableHeader>
          <TableHeader width={25}>address</TableHeader>
          <TableHeader width={25}>phone_number</TableHeader>
        </TableRow>
        <TableRow type="body">
          <TableBody width={25}>Yutazon</TableBody>
          <TableBody width={25}>
            <a href="https://yutazon.me">yutazon.me@gmail.com</a>
          </TableBody>
          <TableBody width={25} truncate={false}>
            東京都千代田区永田町１丁目７−１
          </TableBody>
          <TableBody width={25}>000-0000-0000</TableBody>
        </TableRow>
      </Table>
    </Container>
    <Container>
      <Table>
        <TableRow type="header">
          <TableHeader width={25}>name</TableHeader>
          <TableHeader width={25}>email</TableHeader>
          <TableHeader width={25}>address</TableHeader>
          <TableHeader width={25}>phone_number</TableHeader>
        </TableRow>
        <TableRow type="body">
          <TableBody width={25}>Yutazon</TableBody>
          <TableBody width={25}>
            <a href="https://yutazon.me">yutazon.me@gmail.com</a>
          </TableBody>
          <TableBody width={25}>東京都千代田区永田町１丁目７−１</TableBody>
          <TableBody width={25}>000-0000-0000</TableBody>
        </TableRow>
      </Table>
    </Container>
  </>
));

const Container = styled.div`
  margin: 1rem 0;
`;
