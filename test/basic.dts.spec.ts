import { testType } from './utils';
import {
  $Keys,
  $Values,
  $PropertyType,
  $ElementType,
  $Shape,
  $NonMaybeType
} from '../src/basic';

type Props = { name: string; age: number; visible: boolean };

// @dts-jest:group $Keys
{
  // @dts-jest:pass:snap
  testType<$Keys<Props>>();
}