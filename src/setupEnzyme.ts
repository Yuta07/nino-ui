import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new EnzymeAdapter() });
