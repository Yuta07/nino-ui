import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
// import { Heading } from '../Heading';
import { Tooltip } from '../../atoms/Tooltip';

storiesOf('Table', module).add('all', () => (
  <>
    {/* <Heading heading="scroll" size={4} /> */}
    <Container>
      <Table>
        <TableRow type="header" width={150}>
          <TableHeader width={25}>column1</TableHeader>
          <TableHeader width={25}>column2</TableHeader>
          <TableHeader width={25}>column3</TableHeader>
          <TableHeader width={25}>column4</TableHeader>
          <TableHeader width={25}>column5</TableHeader>
          <TableHeader width={25}>column6</TableHeader>
          <TableHeader width={25}>column7</TableHeader>
          <TableHeader width={25}>column8</TableHeader>
        </TableRow>
        <TableRow type="body" width={150}>
          <TableBody width={25}>body1</TableBody>
          <TableBody width={25}>body2</TableBody>
          <TableBody width={25}>body3</TableBody>
          <TableBody width={25}>body4</TableBody>
          <TableBody width={25}>body5</TableBody>
          <TableBody width={25}>body6</TableBody>
          <TableBody width={25}>body7</TableBody>
          <TableBody width={25}>body8</TableBody>
        </TableRow>
      </Table>
    </Container>
    {/* <Heading heading="table" size={4} /> */}
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
    {/* <Heading heading="truncate" size={4} /> */}
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
          <TableBody width={25}>
            <Tooltip
              content={
                <TooltipItem>
                  <Text>東京都千代田区永田町１丁目７−１</Text>
                </TooltipItem>
              }
            >
              東京都千代田区永田町１丁目７−１
            </Tooltip>
          </TableBody>
          <TableBody width={25}>000-0000-0000</TableBody>
        </TableRow>
      </Table>
    </Container>
  </>
));

const Container = styled.div`
  margin: 2rem 0;
`;

const TooltipItem = styled.div`
  padding: 10px;
`;

const Text = styled.span``;
